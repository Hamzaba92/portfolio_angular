import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../language.service';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  languageService = inject(LanguageService);


  buttonText: string = "Live Test";

  changeText(){
    this.buttonText = "On Air";
  }

  resetText(){
    this.buttonText = "Live Test";
  }
}
