import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Data, Event } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LandingPageComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactMeComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit, OnDestroy {
  private routerSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Beim ersten Laden prüfen
      this.scrollToSection();

      this.routerSubscription = this.router.events
        .pipe(filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          this.scrollToSection();
          this.setCanonicalUrl(`https://hamza-bajramoski.net${event.urlAfterRedirects}`);
        });
    }
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private scrollToSection(): void {
    let activeRoute = this.route;
    while (activeRoute.firstChild) {
      activeRoute = activeRoute.firstChild;
    }
    const data: Data = activeRoute.snapshot.data;
    const scrollToSection = data['scrollTo'];
    if (scrollToSection) {
      setTimeout(() => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.warn(`Element mit id '${scrollToSection}' nicht gefunden.`);
        }
      }, 0);
    }
  }


  private setCanonicalUrl(url: string): void {

    const existingLink: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
    if (existingLink) {
      existingLink.setAttribute('href', url);
    } else {
      const link: HTMLLinkElement = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }
}

}