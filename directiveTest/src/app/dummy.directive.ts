import { Directive, Input, ElementRef, Renderer, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDummy]'
})
export class DummyDirective {

  @HostBinding('innerHTML')
  body: string;
  constructor(//private el : ElementRef,
    //private renderer: Renderer
    ) {
      
      this.body = 'This body is generated by a directive.';
   }

   @HostListener('click')
   changeBody() {
    // this.renderer.setElementStyle(this.el.nativeElement,'background','green');
     this.body = 'Host element is clicked.';
   }


}