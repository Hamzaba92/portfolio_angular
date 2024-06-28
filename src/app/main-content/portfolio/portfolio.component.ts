import { CommonModule } from '@angular/common';
import { Component, inject, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../language.service';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  languageService = inject(LanguageService);


  buttonText: string = "Live Test";

  changeText(button: HTMLElement){
    this.buttonText = "On Air";
    button.style.transition = "all 0.3s ease-in-out";
  }

  resetText(button: HTMLElement){
    this.buttonText = "Live Test";
    button.style.transition = "all ease-in-out 0.3s"
  }

  openLinkJoin(){
    window.open('https://join.hamza-bajramoski.net/index.html');
  }

  openLinkJoinGithub(){
    window.open('https://github.com/CookieCrack3r/Join');
  }

  openLinkPolloLoco(){
    window.open('https://el-pollo-loco.hamza-bajramoski.net/index.html');
  }

  openLinkPolloLocoGithub(){
    window.open('https://github.com/Hamzaba92/El-Pollo-Loco');
  }

  openLinkPortfolioGithub(){
    window.open('https://github.com/Hamzaba92/portfolio_angular');
  }
}


