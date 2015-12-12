import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
   selector: 'my-app',
   templateUrl: 'app/app.html',
   directives: [CORE_DIRECTIVES,FORM_DIRECTIVES]
})
class AppComponent {
   name:string = 'dank';
}
bootstrap(AppComponent);
