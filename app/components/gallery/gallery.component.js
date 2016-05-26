"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var singleListing_service_1 = require('../../singleListing.service');
var angular2_materialize_1 = require("angular2-materialize");
var GalleryComponent = (function () {
    function GalleryComponent(_singleListingService) {
        this._singleListingService = _singleListingService;
    }
    GalleryComponent.prototype.getSingle = function () {
        var _this = this;
        this._singleListingService.getSingleListings().then(function (singleListings) { return _this.singleListings = singleListings; });
        console.log(this.singleListings);
    };
    GalleryComponent.prototype.ngOnInit = function () {
        this.getSingle();
        console.log('onInit in gallery');
    };
    GalleryComponent.prototype.getUnder = function () {
        var _this = this;
        this._singleListingService.getSingleUnderListings().then(function (singleListings) { return _this.singleListings = singleListings; });
    };
    GalleryComponent.prototype.getTruck = function () {
        var _this = this;
        this._singleListingService.getSingleTruckListings().then(function (singleListings) { return _this.singleListings = singleListings; });
    };
    GalleryComponent.prototype.getFeatured = function () {
        var _this = this;
        this._singleListingService.getSingleFeaturedListings().then(function (singleListings) { return _this.singleListings = singleListings; });
    };
    GalleryComponent = __decorate([
        core_1.Component({
            selector: 'gallery-comp',
            templateUrl: '/app/components/gallery/gallery.component.html',
            styleUrls: ['app/components/gallery/gallery.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES,
                angular2_materialize_1.MaterializeDirective
            ],
        }), 
        __metadata('design:paramtypes', [singleListing_service_1.SingleListingService])
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;
//# sourceMappingURL=gallery.component.js.map