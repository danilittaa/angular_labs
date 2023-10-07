import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWelcome]',
})
export class WelcomeDirective {
  @Input() set appWelcome(role: string) {
    this.renderer.setStyle(this.el.nativeElement, 'fontSize', '32px');
    this.renderer.setStyle(this.el.nativeElement, 'margin-bottom', '30px');

    this.renderer.setProperty(
      this.el.nativeElement,
      'innerText',
      `Вітаю, ${role}!`
    );
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
