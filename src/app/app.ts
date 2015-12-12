import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {HeroFormComponent} from './heroForm/hero-form.component';

@Component({
   selector: 'my-app',
   templateUrl: 'app/app.html',
   directives: [CORE_DIRECTIVES,FORM_DIRECTIVES, HeroFormComponent]
})
class AppComponent {
}
bootstrap(AppComponent);
