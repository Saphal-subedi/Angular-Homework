// has-role.directive.ts
import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: 'hasRole'
})
export class HasRoleDirective implements OnInit {
  @Input('hasRole') hasRole: string = ''; 

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {

    if (this.hasRole != 'admin') {

      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
    }
  }
}
