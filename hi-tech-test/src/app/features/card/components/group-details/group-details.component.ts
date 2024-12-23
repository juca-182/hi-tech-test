import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Group } from '../../../models/group.interface';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { TypographyComponent } from '../../../../shared/components/typography/typography.component';
import { GroupAdminComponent } from '../group-admin/group-admin.component';
import { GroupResponsesComponent } from '../group-responses/group-responses.component';

@Component({
  selector: 'app-group-details',
  imports: [
    IconComponent,
    TypographyComponent,
    GroupAdminComponent,
    GroupResponsesComponent,
  ],
  templateUrl: './group-details.component.html',
  styleUrl: './group-details.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class GroupDetailsComponent {
  @Input() group!: Group;
}
