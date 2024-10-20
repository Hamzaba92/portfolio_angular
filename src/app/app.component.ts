import { Component, OnInit, PLATFORM_ID, Inject, AfterViewInit, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LandingPageComponent } from './main-content/landing-page/landing-page.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { MySkillsComponent } from './main-content/my-skills/my-skills.component';
import * as AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PortfolioComponent } from './main-content/portfolio/portfolio.component';
import { ContactMeComponent } from './main-content/contact-me/contact-me.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImprintComponent } from './imprint/imprint.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LandingPageComponent,
    AboutMeComponent, RouterLink, MySkillsComponent, PortfolioComponent,
    ContactMeComponent, FooterComponent, PrivacyPolicyComponent, ImprintComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio_angular';

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private cdr: ChangeDetectorRef, private renderer: Renderer2) { }

  isLoading = true;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const images = document.querySelectorAll('img');
      let loadedImages = 0;

      if (images.length === 0) {
        this.finishLoading(); // Falls keine Bilder vorhanden sind, Spinner direkt beenden
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

}







