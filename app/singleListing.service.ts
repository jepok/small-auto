import { SINGLELISTINGS } from './mockSingleListings';
import { Injectable } from 'angular2/core';

  @Injectable()
  export class SingleListingService {
    getSingleListings() {
      return Promise.resolve(SINGLELISTINGS);
    };
    getSingleListing(id:number) {
      return Promise.resolve(SINGLELISTINGS).then(
        singleListings => singleListings.filter(singleListing => singleListing.id === id)[0]
      );
    }
    getSingleFeaturedListings() {
      return Promise.resolve(SINGLELISTINGS)
        .then(
          singleListings => singleListings.filter(singleListing => singleListing.featured === true)
      );
    }

    getSingleUnderListings() {
      return Promise.resolve(SINGLELISTINGS)
        .then(
          singleListings => singleListings.filter(singleListing => singleListing.price < 7000)
      );
    }

    getSingleCarListings() {
      return Promise.resolve(SINGLELISTINGS)
        .then(
          singleListings => singleListings.filter(singleListing => singleListing.isTruck === false)
      );
    }

    getSingleTruckListings() {
      return Promise.resolve(SINGLELISTINGS)
        .then(
          singleListings => singleListings.filter(singleListing => singleListing.isTruck === true)
      );
    }
  }
