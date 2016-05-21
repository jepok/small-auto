import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component';
import {SingleListingService} from './singleListing.service';


bootstrap(AppComponent, [SingleListingService]);
