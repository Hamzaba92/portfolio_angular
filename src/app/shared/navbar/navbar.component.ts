import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  quicklinks: boolean = false;


  aboutme: boolean = false;
  skills: boolean = false;
  portfolio: boolean = false;


  clickedAboutMeLink() {
    this.aboutme = true;
    this.skills = false;
    this.portfolio = false;
  }

  clickedSkillsLink() {
    this.skills = true;
    this.aboutme = false;
    this.portfolio = false;
  }

  clickedPortfolio() {
    this.portfolio = true;
    this.aboutme = false;
    this.skills = false;
  }

  clickedLink(id: string): void {
    if (id == 'aboutme') {
      this.clickedAboutMeLink();
    } else if (id == 'skills') {
      this.clickedSkillsLink();
    } else {
      this.clickedPortfolio();
    }
  }

}
