import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

import { CapitalizadoPipe } from './pipes/capitalizado.pipe';


@NgModule({
  declarations: [
    AppComponent, CapitalizadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
