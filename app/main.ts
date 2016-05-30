import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component';
import {SingleListingService} from './singleListing.service';
import {enableProdMode} from 'angular2/core';

enableProdMode();
bootstrap(AppComponent, [SingleListingService]);
