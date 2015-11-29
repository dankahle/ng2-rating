import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Hero} from './hero';

var heroes = [
   {id: 1, name: 'dank'},
   {id: 2, name: 'carl'}
];

@Component({
   selector: 'my-app',
   styleUrls: ['app/app.css'],
   templateUrl: 'app/app.html',
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
})
class AppComponent {
   title = 'my title';
   heroes = heroes;
}
bootstrap(AppComponent);
