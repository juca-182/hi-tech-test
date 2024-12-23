import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { map, shareReplay, Subscription } from 'rxjs';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class IconComponent implements OnChanges {
  @Input() iconName!: string;

  iconSvg!: SafeHtml;

  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);

  ngOnChanges(changes: SimpleChanges): void {
    if (this.iconName) {
      const path = `assets/icons/${this.iconName}.svg`;
      this.http.get(path, { responseType: 'text' }).subscribe({
        next: (data) =>
          (this.iconSvg = this.sanitizer.bypassSecurityTrustHtml(data)),
        error: () =>
          console.error(`Icon ${this.iconName} not found at ${path}`),
      });
    }
  }
}
