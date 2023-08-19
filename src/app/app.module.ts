import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from '@/modules/toolbar/toolbar.component';
import { NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from '@/modules/toolbar/components/menu/menu.component';
import { MenuButtonComponent } from '@/modules/toolbar/components/menu-button/menu-button.component';
import { ProfileComponent } from '@/modules/toolbar/components/profile/profile.component';
import { MainComponent } from './modules/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    MenuButtonComponent,
    ProfileComponent,
    MainComponent,
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
