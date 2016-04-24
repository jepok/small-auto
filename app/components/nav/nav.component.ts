import { Component }  from 'angular2/core';
import {MaterializeDirective} from "angular2-materialize";


@Component({
  selector: 'main-navbar',
  templateUrl: '/app/components/nav/nav.component.html',
  styleUrls: ['app/components/nav/nav.component.css'],
  directives: [MaterializeDirective]
})

export class NavComponent { }
