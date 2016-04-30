import { Component, OnInit }  from 'angular2/core';
import {MaterializeDirective} from "angular2-materialize";
import { SingleListing } from '../../singleListing';
import { SingleListingService } from '../../singleListing.service';



@Component({
  selector: 'featured-carousel',
  templateUrl: '/app/components/featured/featured.component.html',
  styleUrls: ['app/components/featured/featured.component.css'],
  directives: [MaterializeDirective],


})

export class FeaturedComponent implements OnInit {

  singleListings: SingleListing [];


    constructor(private _singleListingService:SingleListingService) {
    };

    getSingleListings() {
      this._singleListingService.getSingleListings().then(singleListings => this.singleListings = singleListings);
    }
    ngOnInit() {
      this.getSingleListings();
      console.log('ok onit',this.singleListings);
    }

}
