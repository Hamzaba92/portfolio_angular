import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive,],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  languageService = inject(LanguageService)

  @ViewChild('hoverAudio') hoverAudio!: ElementRef<HTMLAudioElement>;

  playAudio(): void {
    this.hoverAudio.nativeElement.play();
  }

  pauseAudio(): void {
    const audio = this.hoverAudio.nativeElement;
    audio.pause();
    audio.currentTime = 0;
  }
}


