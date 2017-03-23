import { Component, AfterViewInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'zoomable-canvas',
    template: `<canvas #canvas
        (mousedown)="mousedown($event)" (mousemove)="mousemove($event);"
        (mousewheel)="mousewheel($event)"
        (window:resize)="onresize()"
        style="width: 100%; height: 100%"
        ></canvas>`
})
export class ZoomableCanvasComponent implements AfterViewInit {
    @ViewChild("canvas") canvasRef : ElementRef;
    private canvas: any;
    private context: any;
    private imageValue: HTMLImageElement;

    @Input() maxZoom: number;
    @Input() minZoom: number;

    @Input() imgSrc: string;

    private topValue: number;
    @Output() topChange: EventEmitter<number> = new EventEmitter<number>();

    private bottomValue: number;
    @Output() bottomChange: EventEmitter<number> = new EventEmitter<number>();

    private leftValue: number;
    @Output() leftChange: EventEmitter<number> = new EventEmitter<number>();

    private rightValue: number;
    @Output() rightChange: EventEmitter<number> = new EventEmitter<number>();

    private zoomLevelValue: number;
    @Output() zoomLevelChange: EventEmitter<number> = new EventEmitter<number>();

    @Output() canvasWidthChange: EventEmitter<number> = new EventEmitter<number>();
    @Output() canvasHeightChange: EventEmitter<number> = new EventEmitter<number>();

    // Saving 2^zoomLevel to avoid a ton of recalculation
    private zoomRatio: number;

    private originalWidth: number;
    private originalHeight: number;

    private dragPos: Point;

    ngAfterViewInit() {
        // Timeout is to avoid a "changed after it was checked" error
        setTimeout(() => this.initialize());
    }

    private initialize() {
        this.canvas = this.canvasRef.nativeElement;

        if (this.canvas.getContext) {
            this.context = this.canvas.getContext('2d');
            
            this.loadImage(this.image);
        }
    }

    private loadImage(image: HTMLImageElement) {
        if (!this.canvas || !image) return;

        this.canvas.width = image.width;
        this.canvas.height = image.height;

        this.onresize();

        if (this.top == undefined) this.top = 0;
        if (this.bottom == undefined) this.bottom = image.height;
        if (this.left == undefined) this.left = 0; 
        if (this.right == undefined) this.right = image.width;
        if (this.zoomLevel == undefined) this.zoomLevel = 0;
        if (this.minZoom == undefined) this.minZoom = 0;

        this.originalWidth = this.right - this.left;
        this.originalHeight = this.bottom - this.top;

        this.draw(this.left, this.top, 1);

        this.rescale(1, this.zoomRatio);
    }

    private draw(left: number, top: number, zoomRatio: number) {
        if (this.context) 
        {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.context.drawImage(
                    this.image, 0, 0, 
                    this.originalWidth, this.originalHeight,
                    -left * zoomRatio, -top * zoomRatio,
                    this.originalWidth * zoomRatio, this.originalHeight * zoomRatio);
        }
    }

    @Input()
    get image(): HTMLImageElement {
        return this.imageValue;
    }

    set image(val: HTMLImageElement) {
        this.imageValue = val;

        val.onload = () => {
            this.top = undefined;
            this.bottom = undefined;
            this.left = undefined;
            this.right = undefined;

            this.loadImage(val);
        }
    }

    @Input()
    get top() {
        return this.topValue;
    }

    set top(val) {
        this.topValue = val;
        this.topChange.emit(val);
    }

    @Input()
    get bottom() {
        return this.bottomValue;
    }

    set bottom(val) {
        this.bottomValue = val;
        this.bottomChange.emit(val);
    }

    @Input()
    get left() {
        return this.leftValue;
    }

    set left(val) {
        this.leftValue = val;
        this.leftChange.emit(val);
    }

    @Input()
    get right() {
        return this.rightValue;
    }

    set right(val) {
        this.rightValue = val;
        this.rightChange.emit(val);
    }

    @Input()
    get zoomLevel() {
        return this.zoomLevelValue;
    }

    set zoomLevel(val) {
        val = this.clampZoomLevel(val);
        var newZoomRatio = Math.pow(2, val);
        var previousZoomRatio = this.zoomRatio;

        if (this.context) setTimeout(() => this.rescale(previousZoomRatio == undefined? 1 : previousZoomRatio, newZoomRatio));

        this.zoomLevelValue = val;
        this.zoomRatio = newZoomRatio;
        this.zoomLevelChange.emit(val);
    }

    private clampZoomLevel(zoomLevel: number): number {
        var clamped = zoomLevel;

        if (this.minZoom != undefined) clamped = Math.max(this.minZoom, clamped);
        if (this.maxZoom != undefined) clamped = Math.min(this.maxZoom, clamped);

        return clamped;
    }

    private rescale(previousZoomRatio: number, newZoomRatio: number, center?: Point) {
        if (previousZoomRatio == newZoomRatio || previousZoomRatio == undefined || newZoomRatio == undefined) return;
        if (this.canvas == null) return;

        // If scrolling using the mouse wheel, keep the spot under the mouse fixed in the canvas
        if (center == null) center = { x: this.canvas.scrollWidth / 2, y: this.canvas.scrollHeight / 2 };
        var yRatio = center.y / this.canvas.scrollHeight;
        var xRatio = center.x / this.canvas.scrollWidth;

        var prevWidth = this.right - this.left;
        var prevHeight = this.bottom - this.top;

        var scale = previousZoomRatio / newZoomRatio;
        var newWidth = scale * prevWidth;
        var newHeight = scale * prevHeight;

        // Grabbing the value of top before triggering the change event for use in draw() below
        var top = this.topValue + (prevHeight - newHeight) * yRatio;
        this.top = top;
        this.bottom -= (prevHeight - newHeight) * (1 - yRatio);

        var left = this.leftValue + (prevWidth - newWidth) * xRatio;
        this.left = left;
        this.right -= (prevWidth - newWidth) * (1 - xRatio);

        this.draw(left, top, newZoomRatio);
    }

    private mousedown(event : MouseEvent) {
        this.dragPos = { x: event.offsetX, y: event.offsetY };
    }

    private mousemove(event : MouseEvent) {
        if (event.buttons > 0) {
            if (this.dragPos == null) this.dragPos = { x: event.offsetX, y: event.offsetY };

            var dx = (event.offsetX - this.dragPos.x)/this.zoomRatio;
            var dy = (event.offsetY - this.dragPos.y)/this.zoomRatio;

            this.top -= dy;
            this.bottom -= dy;
            this.left -= dx;
            this.right -= dx;

            this.dragPos = { x: event.offsetX, y: event.offsetY };

            this.draw(this.left, this.top, this.zoomRatio);
        }
    }

    private mousewheel(event: WheelEvent) {
        event.preventDefault();

        var previousZoomLevel = this.zoomLevelValue;
        var previousZoomRatio = this.zoomRatio;
        var newZoomLevel = this.clampZoomLevel(previousZoomLevel + event.deltaY * 0.05);
        var newZoomRatio = Math.pow(2, newZoomLevel);
 
        this.rescale(previousZoomRatio, newZoomRatio, { x: event.offsetX, y: event.offsetY });

        this.zoomLevelValue = newZoomLevel;
        this.zoomRatio = newZoomRatio;
        this.zoomLevelChange.emit(newZoomLevel);
    }

    private onresize() {
        this.canvasWidthChange.emit(this.canvas.scrollWidth);
        this.canvasHeightChange.emit(this.canvas.scrollHeight);
    }
}

interface Point {
    x: number,
    y: number
}