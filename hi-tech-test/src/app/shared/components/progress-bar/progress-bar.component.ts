import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class ProgressBarComponent {

  @Input() valid!: number;
  @Input() target!: number;

  get progressPercentage(): number {
    return (this.valid / this.target) * 100;
  }

  get progressClass(): string {
    if (this.progressPercentage === 100) {
      return 'progress-bar--target-met';
    } else if (this.progressPercentage < 100 && this.progressPercentage > 0) {
      return 'progress-bar--target-not-met';
    } else {
      return 'progress-bar--no-responses';
    }
  }

}
