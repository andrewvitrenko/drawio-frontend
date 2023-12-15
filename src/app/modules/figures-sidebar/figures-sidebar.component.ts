import { Component } from '@angular/core';

import { figuresPreview } from '@/modules/figures-sidebar/constants';

@Component({
  selector: 'app-figures-sidebar',
  templateUrl: './figures-sidebar.component.html',
  styleUrls: ['./figures-sidebar.component.scss'],
})
export class FiguresSidebarComponent {
  readonly Figures = figuresPreview;
}
