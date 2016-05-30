"use strict";
var browser_1 = require('angular2/platform/browser');
var app_component_1 = require('./app.component');
var singleListing_service_1 = require('./singleListing.service');
var core_1 = require('angular2/core');
core_1.enableProdMode();
browser_1.bootstrap(app_component_1.AppComponent, [singleListing_service_1.SingleListingService]);
//# sourceMappingURL=main.js.map