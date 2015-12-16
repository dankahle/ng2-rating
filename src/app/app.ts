import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Zippy} from './zippy';
import {Rating} from './rating';

@Component({
   selector: 'my-app',
   templateUrl: 'app/app.html',
   styleUrls: ['app/app.css'],
   directives: [CORE_DIRECTIVES,FORM_DIRECTIVES, Rating]
})
class AppComponent {
   private rate:number = 3;

   onUpdate(value) {
      this.rate = value;
   }

}
bootstrap(AppComponent);


