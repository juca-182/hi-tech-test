import {
  Component,
  inject,
  Input,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { TypographyComponent } from '../../../../shared/components/typography/typography.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { TooltipDirective } from '../../../../shared/directives/tooltip/tooltip.directive';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../../../shared/services/modal.service';

@Component({
  selector: 'app-group-admin',
  imports: [IconComponent, TooltipDirective, CommonModule, TypographyComponent],
  templateUrl: './group-admin.component.html',
  styleUrl: './group-admin.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class GroupAdminComponent {
  @Input() textLabel: string = '';
  @Input() tooltipText: string = '';
  @Input() icon: string = '';
  @Input() link: string = '';
  @Input() index: number = 0;
  @Input() copy: boolean = false;

  @ViewChild('modalCopy', { static: true })
  modalCopyTemplate!: TemplateRef<any>;

  isLinkCopied: boolean = false;

  private modalService = inject(ModalService);
  private viewContainerRef = inject(ViewContainerRef);

  navigateToLink(event: MouseEvent): void {
    if (this.copy) {
      this.copyLink(event);
    } else {
      window.open(this.link, '_blank', 'noopener noreferrer');
    }
  }

  copyLink(event: MouseEvent): void {
    this.openModal(event);
    navigator.clipboard.writeText(this.link).then();
  }

  openModal(event: MouseEvent) {
    const title = (event.target as HTMLElement).innerText;
    const { clientX, clientY } = event;

    this.modalService
      .open({
        viewContainerRef: this.viewContainerRef,
        content: this.modalCopyTemplate,
        options: {
          size: 'tiny',
          title,
          modalText: 'Link copied',
          iconVariation: false,
          autoDestroy: 5000,
          tiny: true,
          top: clientY,
          left: clientX,
        },
      })
      ?.subscribe();
  }
}
