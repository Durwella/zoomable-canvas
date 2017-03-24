# zoomable-canvas

> An Angular 2 component allowing panning and zooming an image in a canvas element

A `<canvas>` element hosting an `HtmlImageElement` which can be panned and zoomed using the mouse.

This component also provides two-way bindings for panning and zooming programmatically.  For an example of the component in action, see the [example page](https://durwella.github.io/zoomable-canvas/).

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
    (topChange)="top = $event" (bottomChange)="bottom = $event" 
    (leftChange)="left = $event" (rightChange)="right = $event"
    [(centerX)]="centerX" [(centerY)]="centerY"
    [(zoomLevel)]="zoomLevel" [maxZoom]="maxZoom" [minZoom]="0"
    (canvasWidthChange)="canvasWidth = $event" (canvasHeightChange)="canvasHeight = $event"
></zoomable-canvas>
```

## Contribute
Pull requests accepted.

## License
[MIT © Durwella LLC 2017](https://raw.githubusercontent.com/Durwella/zoomable-canvas/master/LICENSE)