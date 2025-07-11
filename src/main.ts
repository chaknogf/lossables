import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { AppRoutes } from './app/app.routes';
import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';
import '@iconify/iconify';

bootstrapApplication(AppComponent, {
  providers: [
    provideClientHydration(),
    // provideRouter(AppRoutes),
    provideLottieOptions({

      player: () => import('lottie-web')
    }),
  ],
});
