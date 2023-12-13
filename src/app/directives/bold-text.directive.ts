import { Directive, OnInit } from '@angular/core';
import { ElementRef, Renderer2, Input } from '@angular/core';


@Directive({
  selector: '[appBoldText]',
  standalone: true,
})
export class BoldTextDirective implements OnInit {
  @Input() appBold: boolean = true; // Default to true, but can be overridden

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.appBold) {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    }
  }
}
