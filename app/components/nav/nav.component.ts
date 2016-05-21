import { Component }  from 'angular2/core';
import {MaterializeDirective} from "angular2-materialize";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';


@Component({
  selector: 'main-navbar',
  templateUrl: '/app/components/nav/nav.component.html',
  styleUrls: ['app/components/nav/nav.component.css'],
  directives: [MaterializeDirective,
              ROUTER_DIRECTIVES
            ]
})

export class NavComponent { }
