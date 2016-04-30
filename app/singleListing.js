"use strict";
var SingleListing = (function () {
    function SingleListing(id, featured, title, make, model, monthlyPrice, summary) {
        this.id = id;
        this.featured = featured;
        this.title = title;
        this.make = make;
        this.model = model;
        this.monthlyPrice = monthlyPrice;
        this.summary = summary;
    }
    return SingleListing;
}());
exports.SingleListing = SingleListing;
//# sourceMappingURL=singleListing.js.map