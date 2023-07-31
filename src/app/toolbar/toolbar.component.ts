import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MenuCategory } from '@/types/toolbar';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  MenuCategory = MenuCategory;

  title = new FormControl('');
  isMenuOpen = false;
  menuCategory: MenuCategory | null = null;

  save() {
    if (!this.title.value) {
      this.title.setValue('Untitled diagram');
    }

    console.log('title', this.title.value);
  }

  openMenu(event: MouseEvent, category: MenuCategory) {
    event.stopPropagation();
    this.isMenuOpen = true;
    this.menuCategory = category;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.menuCategory = null;
  }

  ngOnInit() {
    document.body.addEventListener('click', this.closeMenu.bind(this));
  }

  ngOnDestroy() {
    document.body.removeEventListener('click', this.closeMenu.bind(this));
  }
}
