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
  }
