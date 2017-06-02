webpackJsonp([4],{

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drug_details__ = __webpack_require__(845);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugDetailsModule", function() { return DrugDetailsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DrugDetailsModule = (function () {
    function DrugDetailsModule() {
    }
    return DrugDetailsModule;
}());
DrugDetailsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__drug_details__["a" /* DrugDetails */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__drug_details__["a" /* DrugDetails */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__drug_details__["a" /* DrugDetails */]
        ]
    })
], DrugDetailsModule);

//# sourceMappingURL=drug-details.module.js.map

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_drugs_service__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__ = __webpack_require__(169);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugDetails; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrugDetails = (function () {
    function DrugDetails(navCtrl, navParams, drugsService, ga) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.drugsService = drugsService;
        this.ga = ga;
        this.similars = [];
        var currentId = navParams.get("id");
        console.log(navParams.get("id"), typeof navParams.get("drug"));
        if (navParams.get("drug") == undefined) {
            this.drugsService.getDrugs()
                .subscribe(function (drugs) {
                for (var i = 0; i < drugs.length; i++) {
                    if (drugs[i].id == currentId) {
                        _this.drug = drugs[i];
                    }
                }
            });
        }
        else {
            this.drug = navParams.get("drug");
        }
        var currentDrugAI;
        this.drugsService.getDrugs()
            .subscribe(function (drugs) {
            for (var i = 0; i < drugs.length; i++) {
                if (drugs[i].id == currentId) {
                    _this.ga.trackView(drugs[i].tradename);
                    currentDrugAI = drugs[i].activeingredient;
                }
            }
            for (var i = 0; i < drugs.length; i++) {
                if (drugs[i].activeingredient === currentDrugAI) {
                    console.log(drugs[i]);
                    var obj = drugs[i];
                    _this.similars.push(obj);
                }
            }
        });
    }
    DrugDetails.prototype.openDrug = function (drug) {
        this.navCtrl.push('drugs-details', {
            id: drug.id,
            drug: drug
        });
    };
    DrugDetails.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DrugDetails');
    };
    return DrugDetails;
}());
DrugDetails = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'drugs-details',
        segment: 'drugs/:id',
        defaultHistory: ['drugs']
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-drug-details',template:/*ion-inline-start:"C:\Users\Osama\Documents\GitHub\DawaeyApp\src\pages\drug-details\drug-details.html"*/'<!--\n  Generated template for the DrugDetails page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="darker">\n    <ion-title *ngIf="drug">\n      {{ drug.tradename }}\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="drug-screen">\n\n  <ion-card>\n\n    <ion-card-content *ngIf="drug">\n      <img class="drug-img" src="http://dawaey.com/drug-pic/{{drug.id}}.jpg"/>\n      <h3 class="title">Tradename :</h3>\n      <h1>{{drug.tradename}}</h1>\n      <h3 class="title">Active Ingredient(s) :</h3>\n      <h2>{{drug.activeingredient}}</h2>\n      <h3 class="title">Contains :</h3>\n      {{drug.howmany}} <strong>{{drug.form}}</strong>\n      <h3 class="title">Price :</h3>\n      <h2 class="price"><strong>{{drug.price}} EGP</strong></h2>\n      <h3 class="title">Main group: </h3>\n      {{drug.maingp}}\n      <h3 class="title">Company :</h3>\n      {{drug.company}}\n    </ion-card-content>\n    \n\n\n\n\n  </ion-card>\n  <a *ngIf="drug" style="color:brown;float:right;padding-right:10px;" href="mailto:osama@dawaey.com?subject=Correcting {{drug.tradename}} information">Report a correction</a>\n\n\n  <ion-item-group *ngIf="drug">\n    <ion-item-divider color="light">More Information :</ion-item-divider>\n    <ion-card-content text-center>\n      <a ion-button href="https://www.google.com/search?q={{drug.tradename}} drug">Search HERE!</a>\n    </ion-card-content>\n  </ion-item-group>\n\n  <ion-item-group *ngIf="similars">\n    <ion-item-divider color="light">Similars :</ion-item-divider>\n    <ion-item *ngFor="let similar of similars" (click)="openDrug(similar)">\n      {{similar.tradename}} <span class="price" style="float:right;">{{similar.price}} EGP</span>\n    </ion-item>\n\n  </ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Osama\Documents\GitHub\DawaeyApp\src\pages\drug-details\drug-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_drugs_service__["a" /* DrugsService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
], DrugDetails);

//# sourceMappingURL=drug-details.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map