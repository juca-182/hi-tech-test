import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-typography',
  imports: [CommonModule],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TypographyComponent {

  @Input() size: 'small' | 'medium' | 'large' | 'extra-large' = 'small';
  @Input() type: 'body' | 'header' = 'body';
  @Input() fontWeight: 'bold' | 'light'| 'regular' = 'regular';
  @Input() fontColor: 'default' |'light-gray' | 'dark-gray' | 'white'  = 'default';
  @Input() styleClass: string = '';


}
