import {
  Component,
  inject,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Group } from '../../../models/group.interface';
import { CommonModule } from '@angular/common';
import { GroupDetailsComponent } from '../group-details/group-details.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { BadgeComponent } from '../../../../shared/components/badge/badge.component';
import { TypographyComponent } from '../../../../shared/components/typography/typography.component';
import { TooltipDirective } from '../../../../shared/directives/tooltip/tooltip.directive';
import { EllipsisDirective } from '../../../../shared/directives/ellipsis/ellipsis.directive';
import { GroupService } from '../../../services/group.service';
@Component({
  selector: 'app-group-card',
  imports: [
    CommonModule,
    GroupDetailsComponent,
    BadgeComponent,
    IconComponent,
    TypographyComponent,
    TooltipDirective,
    EllipsisDirective,
  ],
  templateUrl: './group-card.component.html',
  styleUrl: './group-card.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class GroupCardComponent implements OnInit {
  @Input() group!: Group;
  showDetails = false;
  calculatedStyles: 'success' | 'warning' | 'default' = 'default';
  targetMessage!: string;
  iconBadge!: string;
  iconCheckIn!: string;

  private groupService = inject(GroupService);

  toggleDetails(): void {
    if (!this.showDetails) {
    this.sendClickedData();
    }
    this.showDetails = !this.showDetails;
  }

  ngOnInit(): void {
    this.calculatedStyles = this.getBackgroundColor(
      this.group.response_target,
      this.group.valid_responses
    );
  }
  getBackgroundColor(
    responseTarget: number,
    validResponses: number
  ): 'success' | 'warning' | 'default' {
    if (responseTarget === validResponses) {
      this.targetMessage = 'Target Met';
      this.iconBadge = 'checkmark-solid-icon';
      this.iconCheckIn = 'check-in-icon-enabled'
      return 'success';
    } else if (validResponses > 0.5) {
      this.targetMessage = 'Target Not Met';
      this.iconBadge = 'target-not-met-icon';
      this.iconCheckIn = 'check-in-icon-disabled'
      return 'warning';
    } else {
      this.targetMessage = 'No Responses Collected';
      this.iconBadge = 'target-not-met-icon';
      this.iconCheckIn = 'check-in-icon-disabled'
      return 'warning';
    }
  }

  private sendClickedData() {
    const eventDescription = {
      token: '798gJ',
      event_name: `Show Details event`,
      event_description: `Clicked on the survey with ID number: ${this.group.id}`,
    };
    this.groupService
      .trackEvent(
        eventDescription.token,
        eventDescription.event_name,
        eventDescription.event_description
      )
      .subscribe();
  }
}
