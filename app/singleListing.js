"use strict";
var SingleListing = (function () {
    function SingleListing(id, featured, title, make, model, monthlyPrice, price, isTruck, summary) {
        this.id = id;
        this.featured = featured;
        this.title = title;
        this.make = make;
        this.model = model;
        this.monthlyPrice = monthlyPrice;
        this.price = price;
        this.isTruck = isTruck;
        this.summary = summary;
    }
    return SingleListing;
}());
exports.SingleListing = SingleListing;
//# sourceMappingURL=singleListing.js.map