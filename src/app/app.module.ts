import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftNavBarComponent } from './components/left-nav-bar/left-nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { UsersComponent } from './pages/users/users.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RoundHoursPipe } from './pipes/round-hours.pipe';
import { AvatarDirective } from './directives/avatar.directive';
import { WelcomeDirective } from './directives/welcome.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavBarComponent,
    FooterComponent,
    FirstPageComponent,
    UsersComponent,
    NotFoundComponent,
    UserDetailsComponent,
    RoundHoursPipe,
    AvatarDirective,
    WelcomeDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
