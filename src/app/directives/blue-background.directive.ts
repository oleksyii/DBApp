import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlueBackground]',
  standalone: true
})
export class BlueBackgroundDirective {

  constructor(private _el: ElementRef) {
    this._el.nativeElement.style.backgroundColor = "rgb(66, 135, 245)"
   }

}
