import { Component }  from 'angular2/core';
import { FeaturedComponent } from '../featured/featured.component';
import { SingleListingService } from '../../singleListing.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector: 'landing',
  templateUrl: '/app/components/landing/landing.component.html',

  styleUrls: ['app/components/landing/landing.component.css'],
  directives: [
    FeaturedComponent,
    ROUTER_DIRECTIVES
  ]

})

export class LandingComponent { }
