import { CommonModule } from '@angular/common';
import { Component, ElementRef, NgModule, Renderer2, ViewChild, AfterViewInit, inject } from '@angular/core';
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
 
  private audioInitialized = false;


  constructor(){}

  languageService = inject(LanguageService)

  @ViewChild('hoverAudio') hoverAudio!: ElementRef<HTMLAudioElement>;

  

  
  initializeAudio(): void {
    if (!this.audioInitialized) {
      this.audioInitialized = true;
      this.hoverAudio.nativeElement.play().then(() => {
        this.hoverAudio.nativeElement.pause();
        this.hoverAudio.nativeElement.currentTime = 0;
      }).catch(error => {
        console.error('Audio initialization failed:', error);
      });
    }
  }

  playAudio(): void {
    if (this.audioInitialized) {
      this.hoverAudio.nativeElement.play().catch(error => {
        console.error('Play failed:', error);
      });
    } else {
      this.initializeAudio();
      setTimeout(() => this.playAudio(), 100); 
    }
  }


  pauseAudio(): void {
    if (this.audioInitialized) {
      const audio = this.hoverAudio.nativeElement;
      audio.pause();
      audio.currentTime = 0;
    }
  }










}