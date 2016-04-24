import { Component }  from 'angular2/core';
import {MaterializeDirective} from "angular2-materialize";


@Component({
  selector: 'featured-carousel',
  templateUrl: '/app/components/featured/featured.component.html',

  styleUrls: ['app/components/featured/featured.component.css'],
  directives: [MaterializeDirective]

})

export class FeaturedComponent { }
