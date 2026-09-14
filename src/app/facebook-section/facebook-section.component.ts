import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FbPostsService, FbPost } from '../services/fb-posts.service';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-facebook-section',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './facebook-section.component.html',
  styleUrls: ['./facebook-section.component.css']
})
export class FacebookSectionComponent implements OnInit, OnDestroy {
  posts: FbPost[] = [];
  pageUrl: string;
  pageName: string;

  index = 0;
  slidesPerView = 1;
  paused = false;
  touchX = 0;
  touchY = 0;

  private autoTimer: ReturnType<typeof setInterval> | null = null;
  private isBrowser: boolean;

  constructor(
    private fbService: FbPostsService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.posts = fbService.posts;
    this.pageUrl = fbService.pageUrl;
    this.pageName = fbService.pageName;
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.loadLivePosts();
    this.slidesPerView = this.computeSlides();
    if (this.isBrowser) {
      this.startAutoPlay();
    }
  }

  private loadLivePosts(): void {
    if (!this.isBrowser) return;
    this.fbService.livePosts().subscribe((live) => {
      this.posts = live;
      this.index = 0;
      this.clampIndex();
    });
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  @HostListener('window:resize')
  onResize(): void {
    const next = this.computeSlides();
    if (next !== this.slidesPerView) {
      this.slidesPerView = next;
      this.clampIndex();
    }
  }

  private computeSlides(): number {
    if (!this.isBrowser) {
      return typeof window !== 'undefined' ? (window.innerWidth >= 992 ? 3 : window.innerWidth >= 768 ? 2 : 1) : 3;
    }
    return window.innerWidth >= 992 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  }

  get maxIndex(): number {
    return Math.max(0, this.posts.length - this.slidesPerView);
  }

  get trackStyle(): string {
    const band = 100 / this.slidesPerView;
    return `transform: translate3d(-${this.index * band}%, 0, 0);`;
  }

  get dots(): number[] {
    return Array.from({ length: this.maxIndex + 1 }, (_, i) => i);
  }

  next(): void {
    this.index = this.index >= this.maxIndex ? 0 : this.index + 1;
  }

  prev(): void {
    this.index = this.index <= 0 ? this.maxIndex : this.index - 1;
  }

  goTo(i: number): void {
    this.index = Math.max(0, Math.min(i, this.maxIndex));
  }

  togglePause(pause: boolean): void {
    this.paused = pause;
    if (pause) {
      this.stopAutoPlay();
    } else {
      this.startAutoPlay();
    }
  }

  formatCount(n: number): string {
    return n >= 1000 ? `${(n / 1000).toFixed(1).replace('.', ',')}K` : `${n}`;
  }

  private clampIndex(): void {
    if (this.index > this.maxIndex) {
      this.index = this.maxIndex;
    }
  }

  private startAutoPlay(): void {
    if (this.autoTimer || !this.isBrowser) return;
    this.autoTimer = setInterval(() => {
      if (!this.paused) {
        this.next();
      }
    }, 5500);
  }

  private stopAutoPlay(): void {
    if (this.autoTimer) {
      clearInterval(this.autoTimer);
      this.autoTimer = null;
    }
  }

  /* Touch / swipe */
  onTouchStart(e: Event): void {
    const t = e as TouchEvent;
    this.touchX = t.touches[0].clientX;
    this.touchY = t.touches[0].clientY;
  }

  onTouchEnd(e: Event): void {
    const t = e as TouchEvent;
    const dx = t.changedTouches[0].clientX - this.touchX;
    const dy = t.changedTouches[0].clientY - this.touchY;
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) {
      this.next();
    } else {
      this.prev();
    }
  }
}