import { Component, Input } from '@angular/core';

import { FigurePreview } from '@/modules/figures-sidebar/types';

@Component({
  selector: 'app-figure-preview',
  templateUrl: './figure-preview.component.html',
  styleUrls: ['./figure-preview.component.scss'],
})
export class FigurePreviewComponent {
  @Input('figure') figure: FigurePreview;
}
