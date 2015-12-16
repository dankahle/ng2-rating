import {Directive, ElementRef, Renderer, Input} from 'angular2/angular2';

@Directive ({
   selector: '[dk-visible]',
})

export class DkVisible {
   @Input('dk-visible') mytext: string;

   constructor(private el:ElementRef, private renderer:Renderer) {

      renderer.setElementStyle(el, 'visibility', this.mytext? 'visible' : 'hidden');
   }
}


