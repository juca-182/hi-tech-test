import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[ellipsis]',
})
export class EllipsisDirective implements AfterViewInit {
  @Input() ellipsis: boolean = true;
  @Input() twoLine: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (this.ellipsis) {
      this.applyEllipsis();
    }
  }

  private applyEllipsis(): void {
    const element = this.elementRef.nativeElement;

    this.renderer.setStyle(element, 'overflow', 'hidden');
    this.renderer.setStyle(element, 'text-overflow', 'ellipsis');
    this.renderer.setStyle(element, 'display', '-webkit-box');
    this.renderer.setStyle(element, '-webkit-box-orient', 'vertical');

    if (this.twoLine) {
      this.renderer.setStyle(element, '-webkit-line-clamp', '2');
    } else {
      this.renderer.removeStyle(element, '-webkit-line-clamp');
      this.renderer.setStyle(element, 'white-space', 'nowrap');
    }
  }
}
