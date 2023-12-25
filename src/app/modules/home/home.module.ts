import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FigurePreviewComponent } from '@/components/pages/home/figures-sidebar/components/figure-preview/figure-preview.component';
import { FiguresSidebarComponent } from '@/components/pages/home/figures-sidebar/figures-sidebar.component';
import { MenuComponent } from '@/components/pages/home/toolbar/components/menu/menu.component';
import { MenuButtonComponent } from '@/components/pages/home/toolbar/components/menu-button/menu-button.component';
import { ProfileComponent } from '@/components/pages/home/toolbar/components/profile/profile.component';
import { ToolbarComponent } from '@/components/pages/home/toolbar/toolbar.component';
import { HomePage } from '@/pages/home/home.page';

@NgModule({
  declarations: [
    ToolbarComponent,
    MenuComponent,
    MenuButtonComponent,
    ProfileComponent,
    HomePage,
    FiguresSidebarComponent,
    FigurePreviewComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, NgOptimizedImage],
})
export class HomeModule {}
