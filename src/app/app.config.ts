import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

// Make sure 'export' is at the start of the line!
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(route),
    provideHttpClient()
  ]
};