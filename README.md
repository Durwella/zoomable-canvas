# zoomable-canvas

> An Angular 2 component allowing panning and zooming an image in a canvas element

A `<canvas>` element hosting an `HtmlImageElement` which can be panned and zoomed using the mouse.

This component also provides two-way bindings for panning and zooming programmatically.

## Install

```
npm install --save @durwella/zoomable-canvas
```

## Usage
Import the component in your `NgModule`:

```js
import { ZoomableCanvasComponent } from '@durwella/zoomable-canvas';

@NgModule({
    ...
    declarations: [
        ...
        ZoomableCanvasComponent
    ],
    ...
})
export class AppModule {
}
```

Include the components in your app:

```html
<zoomable-canvas 
    [image]="image"
    [(top)]="top" [(bottom)]="bottom" [(left)]="left" [(right)]="right"
    [(zoomLevel)]="zoomLevel" [maxZoom]="maxZoom" [minZoom]="0"
    (canvasWidthChange)="canvasWidth = $event" (canvasHeightChange)="canvasHeight = $event"
></zoomable-canvas>
```

## Contribute
Pull requests accepted.

## License
MIT © Durwella LLC 2017