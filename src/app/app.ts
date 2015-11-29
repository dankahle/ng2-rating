import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Hero} from './hero';

var _heroes = [
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
   heroes = _heroes;

   addHero(newHero) {
      this.heroes.push({id: this.heroes.length, name: newHero.value});
      newHero.value = null;
   }

}
bootstrap(AppComponent);
