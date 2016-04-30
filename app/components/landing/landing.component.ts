import { Component }  from 'angular2/core';
import { FeaturedComponent } from '../featured/featured.component';
import { SingleListingService } from '../../singleListing.service';

@Component({
  selector: 'landing',
  templateUrl: '/app/components/landing/landing.component.html',

  styleUrls: ['app/components/landing/landing.component.css'],
  directives: [
    FeaturedComponent,
  ]

})

export class LandingComponent { }
