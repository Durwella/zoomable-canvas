webpackJsonp([1,4],{

/***/ 342:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 342;


/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(454);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/neal/Desktop/zoomable-canvas/examples/world-map-example/src/main.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.zoomLevel = 0;
        this.maxZoom = 5;
        this.image = new Image();
        this.image.src = "zoomable-canvas/assets/img/worldmap.svg";
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(610),
            styles: [__webpack_require__(609)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/neal/Desktop/zoomable-canvas/examples/world-map-example/src/app.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__durwella_zoomable_canvas__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__durwella_zoomable_canvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__durwella_zoomable_canvas__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(453);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__durwella_zoomable_canvas__["ZoomableCanvasComponent"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/neal/Desktop/zoomable-canvas/examples/world-map-example/src/app.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=/Users/neal/Desktop/zoomable-canvas/examples/world-map-example/src/environment.prod.js.map

/***/ }),

/***/ 609:
/***/ (function(module, exports) {

module.exports = ".canvas-container {\n  border: 1px solid black;\n  padding: 0px;\n}\n:host >>> canvas {\n  margin-bottom: -5px;\n}\nbody {\n  /* Margin bottom by footer height */\n  margin-bottom: 30px;\n}\n.footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 30px;\n  background-color: #f5f5f5;\n  padding-top: 6px;\n}"

/***/ }),

/***/ 610:
/***/ (function(module, exports) {

module.exports = "<a href=\"https://github.com/Durwella/zoomable-canvas\"><img style=\"position: absolute; top: 0; right: 0; border: 0;\" src=\"https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67\" alt=\"Fork me on GitHub\" data-canonical-src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png\"></a>\n\n<div class=\"container\">\n  <h1>@durwella/zoomable-canvas Example</h1>\n\n  An example of the <a href=\"https://www.npmjs.com/package/@durwella/zoomable-canvas\">@durwella/zoomable-canvas</a> Angular 2 component.\n  Drag to pan and use your mouse scroll wheel or the slider below to zoom.\n  <div class=\"canvas-container\">\n    <zoomable-canvas \n      [image]=\"image\"\n      (topChange)=\"top = $event\" (bottomChange)=\"bottom = $event\" \n      (leftChange)=\"left = $event\" (rightChange)=\"right = $event\"\n      [(centerX)]=\"centerX\" [(centerY)]=\"centerY\"\n      [(zoomLevel)]=\"zoomLevel\" [maxZoom]=\"maxZoom\" [minZoom]=\"0\"\n      (canvasWidthChange)=\"canvasWidth = $event\" (canvasHeightChange)=\"canvasHeight = $event\"\n    ></zoomable-canvas>\n  </div>\n  <br />\n  <input type=\"range\" min=\"0\" step=\"0.05\" max=\"{{ maxZoom }}\" [(ngModel)]=\"zoomLevel\"><br />\n  <b>Zoom Level:</b> {{ zoomLevel | number:'1.2-2' }}<br />\n  <b>Center:</b> ({{ centerX | number:'1.0-0' }}, {{ centerY | number:'1.0-0' }})<br />\n  <b>Canvas dimensions:</b> {{  canvasWidth }} x {{ canvasHeight }}<br />\n  <b>Image bounds:</b> ({{ left | number:'1.0-0' }}; {{ top | number:'1.0-0' }}; {{ right | number:'1.0-0' }}; {{ bottom | number:'1.0-0' }})\n</div>\n<footer class=\"footer\">\n    <div class=\"container\">\n        <p class=\"text-muted align-right\"><a href=\"https://commons.wikimedia.org/wiki/Category:Blank_SVG_maps_of_the_world#/media/File:A_large_blank_world_map_with_oceans_marked_in_blue_planisferio_en_blanco.svg\">World map</a>\n         used unmodified from Gustavo Giardell and licensed under <a href=\"https://creativecommons.org/licenses/by-sa/3.0/\">CC BY-SA 3.0</a></p>\n    </div>\n</footer>"

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(343);


/***/ })

},[623]);
//# sourceMappingURL=main.bundle.map