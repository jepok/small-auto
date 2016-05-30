import { Component }  from 'angular2/core';
import { OnInit } from 'angular2/core';
import {MaterializeDirective} from "angular2-materialize";
import { SingleListing } from '../../singleListing';
import { SingleListingService } from '../../singleListing.service';
import { RouteConfig, Router, RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {GalleryComponent} from '../gallery/gallery.component';

@Component({
  selector: 'single',
  templateUrl: '/app/components/single/single.component.html',
  styleUrls: ['app/components/single/single.component.css'],
  directives: [MaterializeDirective],
})

export class SingleComponent implements OnInit {

  singleListing: SingleListing;


  constructor(private router: Router,
              private routeParams: RouteParams,
              private _singleListingService: SingleListingService
              ) {}

  ngOnInit() {
    let id = this.routeParams.get('id');
    this._singleListingService.getSingleListing(id).then(singleListing => this.singleListing = singleListing);
    console.log('single Oninit');
  }
}
