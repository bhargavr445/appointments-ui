import { ApplicationConfig, provideZoneChangeDetection, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withDebugTracing, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { appInterceptor } from './app.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withHashLocation(), withComponentInputBinding(), withInMemoryScrolling({scrollPositionRestoration: 'enabled'})),
    provideHttpClient(withInterceptors([appInterceptor]))
  ]
};
