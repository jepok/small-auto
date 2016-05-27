import { Component, OnInit }  from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { SingleListingService } from '../../singleListing.service';
import { SingleListing } from '../../singleListing';
import {MaterializeDirective} from "angular2-materialize";
import {ChangeDetectorRef} from 'angular2/core';


@Component({
  selector: 'gallery-comp',
  templateUrl: '/app/components/gallery/gallery.component.html',
  styleUrls: ['app/components/gallery/gallery.component.css'],
  directives: [ROUTER_DIRECTIVES,
                MaterializeDirective
              ],


})

export class GalleryComponent implements OnInit {

  singleListings: SingleListing[];


  constructor(private _singleListingService:SingleListingService,
                private _cdRef: ChangeDetectorRef) { }

  getSingle() {
    this._singleListingService.getSingleListings().then(singleListings => this.singleListings = singleListings)
    console.log(this.singleListings);
    this._cdRef.detectChanges();

  }

  ngOnInit() {
    this.getSingle();
    console.log('onInit in gallery')
  }

  getUnder() {
    this._singleListingService.getSingleUnderListings().then(singleListings => this.singleListings = singleListings)
    this._cdRef.detectChanges();
  }
  getTruck() {
    this._singleListingService.getSingleTruckListings().then(singleListings => this.singleListings = singleListings)
    this._cdRef.detectChanges();
  }

  getFeatured() {
  this._singleListingService.getSingleFeaturedListings().then(singleListings => this.singleListings = singleListings);
  this._cdRef.detectChanges();
  }

  getCar() {
    this._singleListingService.getSingleCarListings().then(singleListings => this.singleListings = singleListings)
    this._cdRef.detectChanges();
  }
}
