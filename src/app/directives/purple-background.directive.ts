import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPurpleBackground]',
  standalone: true
})
export class PurpleBackgroundDirective {

  constructor(private _el: ElementRef) {
    this._el.nativeElement.style.backgroundColor = "rgb(184, 46, 138)"
   }


}
