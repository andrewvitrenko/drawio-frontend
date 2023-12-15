import { FigurePreview } from '@/modules/figures-sidebar/types';
import { FigureShape } from '@/types/figure';

export const figuresPreview: FigurePreview[] = [
  {
    type: FigureShape.RECTANGLE,
    title: 'Rectangle',
    path: 'assets/figures/rectangle.svg',
  },
  {
    type: FigureShape.TRIANGLE,
    title: 'Triangle',
    path: '/assets/figures/triangle.svg',
  },
  {
    type: FigureShape.CIRCLE,
    title: 'Circle',
    path: '/assets/figures/circle.svg',
  },
  { type: FigureShape.LINE, title: 'Line', path: '/assets/figures/line.svg' },
  {
    type: FigureShape.ROUNDED_RECTANGLE,
    title: 'Rounded rectangle',
    path: '/assets/figures/rounded-rectangle.svg',
  },
];
