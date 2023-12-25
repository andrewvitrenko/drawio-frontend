import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from '@/components/pages/home/toolbar/toolbar.component';
import { NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from '@/components/pages/home/toolbar/components/menu/menu.component';
import { MenuButtonComponent } from '@/components/pages/home/toolbar/components/menu-button/menu-button.component';
import { ProfileComponent } from '@/components/pages/home/toolbar/components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@/modules/app-routing/app-routing.module';
import { HomePage } from '@/modules/app-routing/pages/home/home.page';
import { MainComponent } from '@/components/pages/home/main/main.component';
import { LoginModule } from '@/modules/login/login.module';
import { RegisterModule } from '@/modules/register/register.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    MenuButtonComponent,
    ProfileComponent,
    HomePage,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
