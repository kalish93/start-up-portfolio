import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent, HomeComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
  ],
})
export class AppModule {}
