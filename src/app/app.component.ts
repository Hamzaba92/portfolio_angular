import { Component, OnInit, PLATFORM_ID, Inject, AfterViewInit, ChangeDetectorRef, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import * as AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FooterComponent } from './shared/footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio_angular';

  @ViewChild('customCursor', { static: true }) customCursor!: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
    private meta: Meta,
    private titleService: Title
  ) {}

  isLoading = true;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initMouseFollower();
      this.handleImageLoading();

      this.renderer.listen('document', 'mouseover', (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.closest('.cursor-hover') || target.tagName === 'A') {
          this.renderer.addClass(this.customCursor.nativeElement, 'active');
        } else {
          this.renderer.removeClass(this.customCursor.nativeElement, 'active');
        }
      });
    }

    this.setMetaTags();
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

  private handleImageLoading() {
    const images = document.querySelectorAll('img');
    let loadedImages = 0;

    if (images.length === 0) {
      this.finishLoading();
      return;
    }

    images.forEach((img) => {
      this.renderer.listen(img, 'load', () => {
        loadedImages++;
        if (loadedImages === images.length) {
          this.finishLoading();
        }
      });
      this.renderer.listen(img, 'error', () => {
        loadedImages++;
        if (loadedImages === images.length) {
          this.finishLoading();
        }
      });
    });

    setTimeout(() => this.finishLoading(), 5000); // Fallback
  }

  private finishLoading() {
    if (this.isLoading) {
      this.isLoading = false;
      this.cdr.detectChanges();
    }
  }

  private setMetaTags() {
    this.titleService.setTitle('Freelance Web App Entwicklung');
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Entdecken Sie das Portfolio von Hamza Bajramoski | Ihrem erfahrenen Webentwickler und Marketing-Spezialisten. Fordern Sie noch heute eine preiswerte Offerte an.',
      },
      {
        name: 'keywords',
        content:
          'hamza bajramoski, e commerce, seo freelancer, angular material, django python, suchmaschinenoptimierung kosten, web entwicklung hamburg, web applikation entwicklung, web app entwicklung kosten, meta ads, meta business suite, e mail marketing services',
      },
      { property: 'og:title', content: 'Freelance Web App Entwicklung' },
      {
        property: 'og:description',
        content:
          'Portfolio | Webentwicklung | Marketing-Spezialist | Hamza Bajramoski',
      },
      { property: 'og:url', content: 'https://hamza-bajramoski.net' },
      { property: 'og:image', content: 'https://hamza-bajramoski.net/assets/Hamza_Bajramoski.jpg' },
      { property: 'og:type', content: 'website' },
    ]);
  }

  initMouseFollower() {
    if (this.customCursor) {
      this.renderer.listen('document', 'mousemove', (event: MouseEvent) => {
        const { clientX, clientY } = event;
        this.renderer.setStyle(
          this.customCursor.nativeElement,
          'transform',
          `translate3d(${clientX}px, ${clientY}px, 0)`
        );
      });
    }
  }
}
