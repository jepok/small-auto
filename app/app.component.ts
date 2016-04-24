import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {LandingComponent} from './components/landing/landing.component';
import "angular2-materialize";
import {NavComponent} from './components/nav/nav.component';



@Component({
    selector: 'my-app',
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
      ROUTER_PROVIDERS
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


export class AppComponent { }
