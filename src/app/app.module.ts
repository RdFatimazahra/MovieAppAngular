import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    provideHttpClient(withFetch()) // Ajoutez cette ligne pour configurer fetch
  ],
  bootstrap: [] // Laissez le tableau bootstrap vide si vous utilisez un composant autonome
})
export class AppModule { }
