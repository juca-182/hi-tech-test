import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  ViewContainerRef,
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TooltipComponent } from '../../../shared/components/tooltip/tooltip.component';

@Directive({
  selector: '[tooltip]',
})
export class TooltipDirective {
  @Input() tooltip = '';

  private tooltipComponent: ComponentRef<any> | null = null;

  constructor(
    private viewContainerRef: ViewContainerRef,
    @Inject(DOCUMENT) private document: Document,
    private elementRef: ElementRef,
    private appRef: ApplicationRef
  ) {}
  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.tooltipComponent) return;

    const tooltipComponentFactory =
      this.viewContainerRef.createComponent(TooltipComponent);
    this.tooltipComponent = tooltipComponentFactory;
    this.document.body.appendChild(
      this.tooltipComponent.location.nativeElement
    );
    this.setTooltipComponentProperties();
    this.tooltipComponent.hostView.detectChanges();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (!this.tooltipComponent) {
      return;
    }
    this.appRef.detachView(this.tooltipComponent.hostView);
    this.tooltipComponent.destroy();
    this.tooltipComponent = null;
  }

  private setTooltipComponentProperties() {
    if (!this.tooltipComponent) return;

    this.tooltipComponent.instance.text = this.tooltip;
    const { left, right, bottom } =
      this.elementRef.nativeElement.getBoundingClientRect();
    this.tooltipComponent.instance.left = (right - left) / 2 + left;
    this.tooltipComponent.instance.top = bottom;
  }
}
