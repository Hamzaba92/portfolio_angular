import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import Typed from 'typed.js';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements AfterViewInit{

  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: object 
  ) {}

  
  openLinkLinkedIn(){
    window.open('https://www.linkedin.com/in/hamza-bajramoski-404a90294/');
  }

  openLinkGithub(){
    window.open('https://github.com/Hamzaba92');
  }


  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        const options = {
          strings: [
          "Web Developer.",
            "Softwareentwicklung.",
            "SEO-Freelancer."
          ],
          typeSpeed: 120,
          backSpeed: 80,
          backDelay: 1500,
          loop: true,
          showCursor: false
        };

        new Typed("#animated-title", options);
      });
    }
  }
}


