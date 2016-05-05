import { Component }  from 'angular2/core';
import { OnInit } from 'angular2/core';
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

  singleListings: SingleListing[];
  featuredListings: SingleListing[];

  constructor(private _singleListingService:SingleListingService){ }


    getFeatured() {
    this._singleListingService.getSingleFeaturedListings().then(featuredListings => this.featuredListings = featuredListings);
    console.log(this.featuredListings);
    }
    getSingle() {
    this._singleListingService.getSingleListings().then(singleListings => this.singleListings = singleListings);
      console.log(this.singleListings);
    }
    ngOnInit() {
      this.getSingle();
      this.getFeatured();
      console.log('get to oninit');
      console.log('ok onit',SingleListing);
    }
    onResize(event){
      this.ngOnInit();
      console.log('resizing here',this.singleListings);
    }

}
