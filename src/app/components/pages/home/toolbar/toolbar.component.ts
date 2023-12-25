import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { menu } from './constants';
import { MenuControlEvent, MenuItem } from './types';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit, OnDestroy {
  readonly Menu = menu;

  title = new FormControl('');
  isMenuOpen = false;
  menuItems?: MenuItem[];
  anchor: ElementRef<HTMLButtonElement>;

  save() {
    if (!this.title.value) {
      this.title.setValue('Untitled diagram');
    }

    console.log('title', this.title.value);
  }

  openMenu({ category, elementRef }: MenuControlEvent) {
    this.anchor = elementRef;
    this.isMenuOpen = true;
    this.menuItems = menu.find((menu) => category === menu.category)?.menuItems;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.menuItems = undefined;
  }

  ngOnInit() {
    document.body.addEventListener('click', this.closeMenu.bind(this));
  }

  ngOnDestroy() {
    document.body.removeEventListener('click', this.closeMenu.bind(this));
  }
}
