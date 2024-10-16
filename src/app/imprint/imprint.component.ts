import { Component, inject } from '@angular/core';
import { LanguageService } from '../language.service';
@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  languageService = inject(LanguageService);
}
