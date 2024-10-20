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
export class AppComponent implements OnInit {
  title = 'portfolio_angular';

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private cdr: ChangeDetectorRef, private renderer: Renderer2) {}

  isLoading = true;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();

      this.renderer.listen('window', 'load', () => {
        this.isLoading = false;
        this.cdr.detectChanges();
      })
    };

  }







}