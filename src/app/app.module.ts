import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './shared/header-menu/header-menu.component';
import { FooterMenuComponent } from './shared/footer-menu/footer-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    FooterMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
