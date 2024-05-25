import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LandingPageComponent } from './main-content/landing-page/landing-page.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { MySkillsComponent } from './main-content/my-skills/my-skills.component';
import * as AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';
import { PortfolioComponent } from './main-content/portfolio/portfolio.component';
import { ContactMeComponent } from './main-content/contact-me/contact-me.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LandingPageComponent, AboutMeComponent, RouterLink, MySkillsComponent, PortfolioComponent, ContactMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio_angular';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}


  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }

  }







}