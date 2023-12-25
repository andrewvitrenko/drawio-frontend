export enum FigureShape {
  RECTANGLE = 'RECTANGLE',
  CIRCLE = 'CIRCLE',
  TRIANGLE = 'TRIANGLE',
  LINE = 'LINE',
  ROUNDED_RECTANGLE = 'ROUNDED_RECTANGLE',
}

export interface Figure {
  id: number;
  width: number;
  height: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  rotate?: number;
  sceneId: number;
}
