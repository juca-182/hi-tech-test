import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TypographyComponent } from "../typography/typography.component";

@Component({
  selector: 'app-tooltip',
  imports: [CommonModule, TypographyComponent],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class TooltipComponent {

  @Input() text: string = '';
  @Input() left: number = 0;
  @Input() top: number = 0;


}
