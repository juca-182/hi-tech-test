import { Component, EventEmitter, HostBinding, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { CommonModule } from '@angular/common';
import { TypographyComponent } from "../typography/typography.component";

@Component({
  selector: 'app-badge',
  imports: [IconComponent, CommonModule, TypographyComponent],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class BadgeComponent  {


  @Input() icon!: string;
  @Input() text!: string | number;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() hoverEnabled: boolean = true;
  @Input() backgroundColor: 'default' | 'success' | 'warning' | 'none' = 'default';
  @Input() fontWeight: 'bold' | 'light'| 'regular' = 'regular';
  @Input() fontSize: 'small' | 'medium' = 'small';
  @Input() fontColor: 'default' |'light-gray' | 'dark-gray' | 'white'  = 'default';
  @Input() validResponses!: number;
  @Input() responseTarget!: number;
  @Input() badgeType: 'survey-status' | 'regular' = 'regular';
  @Input() emitData: boolean = false;

  @Output() badgeClick = new EventEmitter<any>();

  get backgroundClass(): string {
    return `bg-${this.backgroundColor}`;
  }


  onBadgeClick(event?: Event): void {
    this.badgeClick.emit(event);
  }



}
