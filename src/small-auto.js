import {Component, View} from 'angular2/core';

@Component({
  selector: 'small-auto'
})

@View({
  templateUrl: 'small-auto.html'
})

export class SmallAuto {

  constructor() {
    console.info('SmallAuto Component Mounted Successfully');
  }

}
