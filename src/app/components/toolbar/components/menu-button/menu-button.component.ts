import { menu } from '@/components/toolbar/constants';
import { MenuCategory, MenuControlEvent } from '@/components/toolbar/types';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent {
  @Input('title') title: string = '';
  @Input('category') category: MenuCategory = MenuCategory.FILE;
  @Output() openMenuEvent = new EventEmitter<MenuControlEvent>();

  @ViewChild('buttonRef') buttonRef: ElementRef<HTMLButtonElement>;

  openMenu(event: MouseEvent) {
    event.stopPropagation();
    this.openMenuEvent.emit({ category: this.category, elementRef: this.buttonRef });
  }

  protected readonly menu = menu;
}
