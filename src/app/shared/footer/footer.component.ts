import { Component, inject } from '@angular/core';
import { LanguageService } from '../../language.service';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {

  languageService = inject(LanguageService);

  openLinkGithub(){
    window.open('https://github.com/Hamzaba92');
  }

  openLinkLinkedIn(){
    window.open('https://www.linkedin.com');
  }
}
