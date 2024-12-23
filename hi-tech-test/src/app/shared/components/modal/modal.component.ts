import { CommonModule } from '@angular/common';
import { Component, ElementRef, EmbeddedViewRef, EventEmitter, inject, Input, Output, ViewContainerRef } from '@angular/core';
import { TypographyComponent } from "../typography/typography.component";
import { IconComponent } from "../icon/icon.component";


@Component({
  selector: 'app-modal',
  imports: [CommonModule, TypographyComponent, IconComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() size = '';
  @Input() title = '';
  @Input() position: { top?: number; left?: number } = {};
  @Input() contentViewRef!: EmbeddedViewRef<any>;
  @Input() modalText: string = '';
  @Input() iconVariation: boolean = false;
  @Input() tiny: boolean = false;
  @Input() autoDestroy: number = 0;


  @Output() closeEvent = new EventEmitter<void>();
  @Output() submitEvent = new EventEmitter<void>();

  close(): void {
    this.closeEvent.emit();
  }

  submit(): void {
    this.submitEvent.emit();
  }
}
