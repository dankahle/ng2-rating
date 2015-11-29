import {Pipe} from 'angular2/angular2';

@Pipe({
   name: 'myUpper'
})
export class MyUpper {
   transform(value: string, args:string[]) : string {
      return value.toUpperCase();
   }
}
