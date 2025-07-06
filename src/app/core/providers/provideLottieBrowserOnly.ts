import { inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';

export function provideLottieBrowserOnly() {
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    return provideLottieOptions({
      player: () => player,
    });
  }

  return []; // No se provee en SSR
}
