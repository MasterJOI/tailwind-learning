import { AppComponent } from './app/app.component';
import {bootstrapApplication} from '@angular/platform-browser';
import {enableProdMode, importProvidersFrom} from '@angular/core';
import {AppRoutingModule} from './app/app-routing.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule)
  ],
});
