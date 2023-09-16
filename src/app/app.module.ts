import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftNavBarComponent } from './components/left-nav-bar/left-nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavBarComponent,
    FooterComponent,
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
