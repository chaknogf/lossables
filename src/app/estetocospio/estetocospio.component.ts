import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
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

  ngAfterViewInit() {
    lottie.loadAnimation({
      container: this.container.nativeElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/animaciones/esteto.json'
    });
  }
}

