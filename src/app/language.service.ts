import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  langDE: boolean = false;
  langEN: boolean = false;

  constructor() { }

  quicklinks: boolean = false;


  aboutme: boolean = false;
  skills: boolean = false;
  portfolio: boolean = false;
  contact: boolean = false;

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

  changeLanguage(id: string) {
    if (id === 'en') {
      this.quickEnglishLink();
    } else if (id === 'de') {
      this.quickGermanLink();
    } else {
      this.langEN = false;
      this.langDE = false;
    }
  }

  quickEnglishLink() {
    this.langDE = false;
    this.langEN = true;
  }

  quickGermanLink() {
    this.langDE = true;
    this.langEN = false;
  }

}
