import { ElementRef } from '@angular/core';

export enum MenuCategory {
  FILE = 'file',
  EDIT = 'edit',
  VIEW = 'view',
  ARRANGE = 'arrange',
  EXTRAS = 'extras',
  HELP = 'help',
}

export interface MenuItem {
  title: string;
  nestedItems?: MenuItem[];
}

export interface Menu {
  category: MenuCategory;
  title: string;
  menuItems: MenuItem[];
}

export interface MenuControlEvent {
  category: MenuCategory;
  elementRef: ElementRef<HTMLButtonElement>;
}

export interface MenuCoordinates {
  x: number;
  y: number;
}
