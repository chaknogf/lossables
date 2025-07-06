import { Injectable, Renderer2, RendererFactory2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private renderer: Renderer2;
  private theme: 'light' | 'dark' = 'light';
  private isBrowser: boolean;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
      this.setTheme(savedTheme || 'light');
    }
  }

  setTheme(theme: 'light' | 'dark') {
    this.theme = theme;

    if (this.isBrowser) {
      localStorage.setItem('theme', theme);
      this.renderer.setAttribute(document.body, 'data-theme', theme);
    }
  }

  toggleTheme() {
    const newTheme = this.theme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  get currentTheme(): 'light' | 'dark' {
    return this.theme;
  }
}
