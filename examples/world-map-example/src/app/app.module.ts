import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ZoomableCanvasComponent } from '@durwella/zoomable-canvas';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ZoomableCanvasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
