import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { logoSVG } from '../shared/logo';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.css']
})
export class FooterSectionComponent {
  logoicon: SafeHtml = logoSVG;
  public mail: string = 'centromedicolossables@gmail.com';
  currentYear: number = new Date().getFullYear();
  facebookUrl = 'https://www.facebook.com/profile.php?id=61578933820425';

  constructor(private sanitizer: DomSanitizer) {
    this.logoicon = this.sanitizer.bypassSecurityTrustHtml(logoSVG);
  }
}