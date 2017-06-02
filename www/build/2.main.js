webpackJsonp([2],{

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partners__ = __webpack_require__(848);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersPageModule", function() { return PartnersPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PartnersPageModule = (function () {
    function PartnersPageModule() {
    }
    return PartnersPageModule;
}());
PartnersPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__partners__["a" /* PartnersPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__partners__["a" /* PartnersPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__partners__["a" /* PartnersPage */]
        ]
    })
], PartnersPageModule);

//# sourceMappingURL=partners.module.js.map

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__ = __webpack_require__(169);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnersPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PartnersPage = (function () {
    function PartnersPage(navCtrl, navParams, ga) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ga = ga;
    }
    PartnersPage.prototype.ionViewDidLoad = function () {
        this.ga.trackView('Parteners Screen');
    };
    return PartnersPage;
}());
PartnersPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'partners',
        segment: 'partners'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-partners',template:/*ion-inline-start:"C:\Users\Osama\Documents\GitHub\DawaeyApp\src\pages\partners\partners.html"*/'<!--\n  Generated template for the Parteners page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Our Parteners ❤</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card>\n  <img src="assets/img/ahmed.jpg"/>\n  <ion-card-content>\n    <ion-card-title>\n      Dr Ahmed ElGweily\n      </ion-card-title>\n    <p>\n      He\'s Our Partener Since June 09, 2016\n    </p>\n   <a href="https://www.facebook.com/ahmed.elgewaily">Follow him on facebook</a>\n\n  </ion-card-content>\n\n</ion-card>\n<ion-card>\n  <img src="assets/img/mostafa.jpg"/>\n  <ion-card-content>\n    <ion-card-title>\n      Dr Mustafa MaHrouky\n      </ion-card-title>\n    <p>\n      He\'s Our Partener Since June 29, 2016\n    </p>\n    <a href="https://www.facebook.com/mostafa.elmahrouky">Follow him on facebook</a>\n  </ion-card-content>\n\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Osama\Documents\GitHub\DawaeyApp\src\pages\partners\partners.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
], PartnersPage);

//# sourceMappingURL=partners.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map