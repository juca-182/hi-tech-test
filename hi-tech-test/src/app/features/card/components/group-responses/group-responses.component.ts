import {
  Component,
  inject,
  Input,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { BadgeComponent } from '../../../../shared/components/badge/badge.component';
import { TypographyComponent } from '../../../../shared/components/typography/typography.component';
import { ProgressBarComponent } from '../../../../shared/components/progress-bar/progress-bar.component';
import { TitleCasePipe } from '@angular/common';
import { ModalService } from '../../../../shared/services/modal.service';
import { GroupService } from '../../../services/group.service';

@Component({
  selector: 'app-group-responses',
  imports: [BadgeComponent, TypographyComponent, ProgressBarComponent],
  providers: [TitleCasePipe],
  templateUrl: './group-responses.component.html',
  styleUrl: './group-responses.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class GroupResponsesComponent {
  @Input() id!: number;
  @Input() valid!: number;
  @Input() target!: number;

  @ViewChild('modalTemplate', { static: true })
  modalTemplate!: TemplateRef<any>;

  private modalService = inject(ModalService);
  private groupService = inject(GroupService);
  private titleCasePipe = inject(TitleCasePipe);
  private viewContainerRef = inject(ViewContainerRef);

  sendClickedData(event: Event) {
    const target = event.target as HTMLElement;
    const text = this.titleCasePipe.transform(target.innerText) as string;

    const eventDescription = {
      token: '798gJ',
      event_name: `${text} event`,
      event_description: `Clicked on the
                          survey with ID number: ${this.id}`,
    };
    this.groupService
      .trackEvent(
        eventDescription.token,
        eventDescription.event_name,
        eventDescription.event_description
      )
      .subscribe();
  }

  openModal(event: MouseEvent) {
    const title = (event.target as HTMLElement).innerText;
    let iconVariation = false;
    const { clientX, clientY } = event;

    if (title.toUpperCase().includes('TARGET')) {
      iconVariation = true;
    }

    this.modalService
      .open({viewContainerRef: this.viewContainerRef, content: this.modalTemplate,
        options: {size: 'small',
        title,
        modalText:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        iconVariation: iconVariation,
        top: clientY,
        left: clientX,
        }
      })
      ?.subscribe();
  }
}
