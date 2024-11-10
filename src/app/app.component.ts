import { Component, OnInit, PLATFORM_ID, Inject, AfterViewInit, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import * as AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ContactMeComponent } from './main-content/contact-me/contact-me.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, 
      ContactMeComponent, FooterComponent, ImprintComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio_angular';

  constructor(@Inject(PLATFORM_ID) private platformId: Object, 
  private cdr: ChangeDetectorRef,
  private renderer: Renderer2,
  private meta: Meta,
  private titleService: Title) { }

  isLoading = true;

  ngOnInit() {

    this.setMetaTags();

    if (isPlatformBrowser(this.platformId)) {
      const images = document.querySelectorAll('img');
      let loadedImages = 0;

      if (images.length === 0) {
        this.finishLoading(); 
      }

      images.forEach((img) => {
        this.renderer.listen(img, 'load', () => {
          loadedImages++;
          if (loadedImages === images.length) {
            this.finishLoading();
          }
        });
        this.renderer.listen(img, 'error', () => {
          loadedImages++;
          if (loadedImages === images.length) {
            this.finishLoading();
          }
        });
      });

      setTimeout(() => this.finishLoading(), 5000);
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

  private finishLoading() {
    if (this.isLoading) {
      this.isLoading = false;
      this.cdr.detectChanges();
    }
  }

  private setMetaTags() {
    this.titleService.setTitle('Hamza Bajramoski | Full-Stack Developer & SEO Freelancer');
    this.meta.addTags([
      { name: 'description', content: 'Portfolio von Hamza Bajramoski, Full-Stack Developer und SEO-Freelancer mit Schwerpunkt auf Angular, Django und Suchmaschinenoptimierung.' },
      { name: 'keywords', content: 'Hamza Bajramoski, Full-Stack Developer, SEO, Freelancer, Angular, Django, Suchmaschinenoptimierung, SEO-Dienstleistungen, DevOps, DevSecOps' },
      { property: 'og:title', content: 'Hamza Bajramoski | Full-Stack Developer & SEO Freelancer' },
      { property: 'og:description', content: 'Erfahre mehr über Hamza Bajramoski, seine Skills in Webentwicklung und SEO sowie seine Projekte als Freelancer.' },
      { property: 'og:url', content: 'https://hamza-bajramoski.net' },
      { property: 'og:image', content: 'https://hamza-bajramoski.net/assets/about-me/portfolio_2.0.png'},
      { property: 'og:type', content: 'website' }
    ]);
  }

}







