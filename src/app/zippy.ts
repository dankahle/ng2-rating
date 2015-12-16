import {Component, Output, EventEmitter} from 'angular2/angular2';

@Component({
   selector: 'my-comp',
   template: `<div class="zippy">
               <div (click)="toggle()">Toggle</div>
               <div [hidden]="!visible">
                  my content
               </div>
              </div>`
})

export class Zippy {
   visible = true;
   @Output() open:EventEmitter = new EventEmitter();
   @Output() close:EventEmitter = new EventEmitter();
   toggle() {
      this.visible = !this.visible;
      if(this.visible) {
         this.open.next(null);
      }
      else {
         this.close.next(null);
      }
   }
}
