webpackJsonp([1],{

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sponsors__ = __webpack_require__(849);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsPageModule", function() { return SponsorsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SponsorsPageModule = (function () {
    function SponsorsPageModule() {
    }
    return SponsorsPageModule;
}());
SponsorsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sponsors__["a" /* SponsorsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sponsors__["a" /* SponsorsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__sponsors__["a" /* SponsorsPage */]
        ]
    })
], SponsorsPageModule);

//# sourceMappingURL=sponsors.module.js.map

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__ = __webpack_require__(169);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SponsorsPage = (function () {
    function SponsorsPage(navCtrl, navParams, ga) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ga = ga;
    }
    SponsorsPage.prototype.ionViewDidLoad = function () {
        this.ga.trackView('Sponsors Screen');
    };
    return SponsorsPage;
}());
SponsorsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'sponsors',
        segment: 'sponsors'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-sponsors',template:/*ion-inline-start:"C:\Users\Osama\Documents\GitHub\DawaeyApp\src\pages\sponsors\sponsors.html"*/'<!--\n  Generated template for the Sponsors page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Our Sponsors ❤</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding text-center class="sponsors-screen">\n\n  <h1>Become a Sponsor</h1>\n  <img src="assets/img/sponsor.png" class="sponsoring-pic" alt="">\n  <h3><a href="mailto:sponsor@dawaey.com" text-center class="email">sponsor@dawaey.com</a></h3>\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Osama\Documents\GitHub\DawaeyApp\src\pages\sponsors\sponsors.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
], SponsorsPage);

//# sourceMappingURL=sponsors.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map