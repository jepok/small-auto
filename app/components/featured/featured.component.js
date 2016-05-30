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
var angular2_materialize_1 = require("angular2-materialize");
var singleListing_1 = require('../../singleListing');
var singleListing_service_1 = require('../../singleListing.service');
var FeaturedComponent = (function () {
    function FeaturedComponent(_singleListingService) {
        this._singleListingService = _singleListingService;
    }
    FeaturedComponent.prototype.getFeatured = function () {
        var _this = this;
        this._singleListingService.getSingleFeaturedListings().then(function (featuredListings) { return _this.featuredListings = featuredListings; });
        console.log(this.featuredListings);
    };
    FeaturedComponent.prototype.getSingle = function () {
        var _this = this;
        this._singleListingService.getSingleListings().then(function (singleListings) { return _this.singleListings = singleListings; });
        console.log(this.singleListings);
    };
    FeaturedComponent.prototype.ngOnInit = function () {
        this.getSingle();
        this.getFeatured();
        console.log('get to oninit');
        console.log('ok onit', singleListing_1.SingleListing);
    };
    FeaturedComponent.prototype.ngAfterContentInit = function () {
        console.log('content inited');
    };
    FeaturedComponent.prototype.ngAfterContentChecked = function () {
        console.log('content checked');
    };
    FeaturedComponent.prototype.ngAfterViewInit = function () {
        console.log('view inited');
    };
    FeaturedComponent = __decorate([
        core_1.Component({
            selector: 'featured-carousel',
            templateUrl: '/app/components/featured/featured.component.html',
            styleUrls: ['app/components/featured/featured.component.css'],
            directives: [angular2_materialize_1.MaterializeDirective],
        }), 
        __metadata('design:paramtypes', [singleListing_service_1.SingleListingService])
    ], FeaturedComponent);
    return FeaturedComponent;
}());
exports.FeaturedComponent = FeaturedComponent;
//# sourceMappingURL=featured.component.js.map