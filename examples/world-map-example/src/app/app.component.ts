import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private top: number;
    private bottom: number;
    private left: number;
    private right: number;
    private centerX: number;
    private centerY: number;
    private zoomLevel: number = 0;
    private maxZoom: number = 5;
    private canvasWidth: number;
    private canvasHeight: number;
    private image: HTMLImageElement = new Image();

    constructor() {
        this.image.src = "assets/img/worldmap.svg";
    }
}
