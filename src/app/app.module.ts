import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from '@/components/toolbar/toolbar.component';
import { NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from '@/components/toolbar/components/menu/menu.component';
import { MenuButtonComponent } from '@/components/toolbar/components/menu-button/menu-button.component';
import { ProfileComponent } from '@/components/toolbar/components/profile/profile.component';
import { MainComponent } from '@/components/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    MenuButtonComponent,
    ProfileComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
