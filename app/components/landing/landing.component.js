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
var featured_component_1 = require('../featured/featured.component');
var router_1 = require('angular2/router');
var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngAfterContentInit = function () {
        console.log('content inited');
    };
    LandingComponent.prototype.ngAfterContentChecked = function () {
        console.log('content checked');
    };
    LandingComponent.prototype.ngAfterViewInit = function () {
        console.log('view inited');
    };
    LandingComponent.prototype.ngOnInit = function () {
        console.log('landing oninit');
    };
    LandingComponent = __decorate([
        core_1.Component({
            selector: 'landing',
            templateUrl: '/app/components/landing/landing.component.html',
            styleUrls: ['app/components/landing/landing.component.css'],
            directives: [
                featured_component_1.FeaturedComponent,
                router_1.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LandingComponent);
    return LandingComponent;
}());
exports.LandingComponent = LandingComponent;
//# sourceMappingURL=landing.component.js.map