import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LandingPageComponent } from './main-content/landing-page/landing-page.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { MySkillsComponent } from './main-content/my-skills/my-skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LandingPageComponent, AboutMeComponent, RouterLink, MySkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio_angular';
}
