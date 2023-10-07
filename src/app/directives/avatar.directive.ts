import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { ROLES } from '../enums/enums';

@Directive({
  selector: '[appAvatar]',
})
export class AvatarDirective {
  @Input() set appAvatar(role: string) {
    this.renderer.setProperty(this.el.nativeElement, 'innerText', role[0]);
    this.renderer.setStyle(
      this.el.nativeElement,
      'backgroundColor',
      this.getColorForRole(role)
    );
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private getColorForRole(role: string) {
    switch (role) {
      case ROLES.USER:
        return 'green';
      case ROLES.ADMIN:
        return 'yellow';
      case ROLES.OWNER:
        return 'red';
      default:
        return 'white';
    }
  }
}
