import { Component, ElementRef, Input, OnChanges } from '@angular/core';
import { MenuCoordinates, MenuItem } from '@/components/pages/home/toolbar/types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnChanges {
  @Input('menu-items') items?: MenuItem[];
  @Input('anchor') anchor: ElementRef<HTMLButtonElement>;

  coordinates: MenuCoordinates;

  ngOnChanges() {
    const { x, y, height } = this.anchor.nativeElement.getBoundingClientRect();
    this.coordinates = {
      x,
      y: y + height,
    };
    console.log(this.coordinates);
  }
}
