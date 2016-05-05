import {Component, ChangeDetectorRef, ChangeDetectionStrategy, OnInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {LandingComponent} from './components/landing/landing.component';

// currently angular2 materialize is listed on the index page instead of imported
// import "angular2-materialize";
import {NavComponent} from './components/nav/nav.component';
import { SingleListingService } from './singleListing.service';


@Component({
    selector: 'my-app',
    changeDetection: ChangeDetectionStrategy.CheckAlways,
    template: `
    <main-navbar></main-navbar>

    <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css'],
    directives: [
      NavComponent,
      ROUTER_DIRECTIVES,
    ],
    providers: [
      ROUTER_PROVIDERS,
      SingleListingService
    ]

})

@RouteConfig([
  {
    path: '/landing',
    name: 'Landing',
    component: LandingComponent,
    useAsDefault: true
  }
])


export class AppComponent implements OnInit {
  constructor(private _singleListingService:SingleListingService){ }

  ngOnInit() {
    console.log("app oninit");
  }
  }
