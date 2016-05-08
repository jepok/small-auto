import { Component, OnInit }  from 'angular2/core';
import { SingleListingService } from '../../singleListing.service';


@Component({
  selector: 'gallery-comp',
  templateUrl: '/app/components/gallery/galler.component.html',

  styleUrls: ['app/components/gallery/gallery.component.css'],
  directives: [
  ]

})

export class GalleryComponent implements OnInit {


  constructor(private _singleListingService:SingleListingService) { }

  ngOnInit() {
    console.log('onInit in gallery')
  }
}
