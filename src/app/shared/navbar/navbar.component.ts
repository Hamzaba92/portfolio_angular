import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../language.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LandingPageComponent } from '../../main-content/landing-page/landing-page.component';
import { PortfolioComponent } from '../../main-content/portfolio/portfolio.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, LandingPageComponent, PortfolioComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(public languageService: LanguageService) { }

  burgerMenu: boolean = false;

}
