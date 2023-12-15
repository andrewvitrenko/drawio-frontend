import { NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MenuComponent } from '@/modules/toolbar/components/menu/menu.component';
import { MenuButtonComponent } from '@/modules/toolbar/components/menu-button/menu-button.component';
import { ProfileComponent } from '@/modules/toolbar/components/profile/profile.component';
import { ToolbarComponent } from '@/modules/toolbar/toolbar.component';

import { AppComponent } from './app.component';
import { FigurePreviewComponent } from './modules/figures-sidebar/components/figure-preview/figure-preview.component';
import { FiguresSidebarComponent } from './modules/figures-sidebar/figures-sidebar.component';
import { MainComponent } from './modules/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    MenuButtonComponent,
    ProfileComponent,
    MainComponent,
    FiguresSidebarComponent,
    FigurePreviewComponent,
  ],
  imports: [BrowserModule, NgOptimizedImage, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
