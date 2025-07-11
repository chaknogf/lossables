import { Component, ElementRef, AfterViewInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import lottie from 'lottie-web';

@Component({
  selector: 'app-estetocospio',
  standalone: true,
  template: `
    <div #lottieContainer style="width: 200px; height: 200px;"></div>
  `
})
export class EstetocospioComponent implements AfterViewInit {
  @ViewChild('lottieContainer', { static: true }) container!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      lottie.loadAnimation({
        container: this.container.nativeElement,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/animaciones/esteto.json'
      });
    }
  }
}
