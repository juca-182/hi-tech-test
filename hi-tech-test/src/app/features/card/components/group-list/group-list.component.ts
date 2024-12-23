import { Component, inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Group } from '../../../models/group.interface';
import { GroupService } from '../../../services/group.service';
import { Subscription } from 'rxjs';
import { GroupCardComponent } from "../group-card/group-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-group-list',
  imports: [GroupCardComponent, CommonModule],
  templateUrl: './group-list.component.html',
  styleUrl: './group-list.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class GroupListComponent implements OnInit, OnDestroy {


  groups!: Group[];

  private groupService =  inject(GroupService);
  private groupServiceSubscription!: Subscription;

  ngOnInit(): void {
    this.groupServiceSubscription = this.groupService.getGroups().subscribe({
      next: (data) => {
        this.groups = data;
      },
      error: (error) => {
        console.error('Error retrieving groups:', error);
      }
    });
  }

  ngOnDestroy(): void {
    this.groupServiceSubscription.unsubscribe();
  }


}
