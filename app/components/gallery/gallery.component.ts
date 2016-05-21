import { Component, OnInit }  from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { SingleListingService } from '../../singleListing.service';
import { SingleListing } from '../../singleListing';


@Component({
  selector: 'gallery-comp',
  templateUrl: '/app/components/gallery/gallery.component.html',

  styleUrls: ['app/components/gallery/gallery.component.css'],
  directives: [ROUTER_DIRECTIVES],


})

export class GalleryComponent implements OnInit {

  singleListings: SingleListing[];

  constructor(private _singleListingService:SingleListingService) { }

  getSingle() {
    this._singleListingService.getSingleListings().then(singleListings => this.singleListings = singleListings)
    console.log(this.singleListings);
  }

  ngOnInit() {
    this.getSingle();
    console.log('onInit in gallery')
  }
}
