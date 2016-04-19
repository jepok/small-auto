import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {SmallAuto} from 'small-auto';

@Component({
  selector: 'main'
})

@View({
  directives: [SmallAuto],
  template: `
    <small-auto></small-auto>
  `
})

class Main {

}

bootstrap(Main);
