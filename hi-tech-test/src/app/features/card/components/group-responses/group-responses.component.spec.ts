import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupResponsesComponent } from './group-responses.component';

describe('GroupResponsesComponent', () => {
  let component: GroupResponsesComponent;
  let fixture: ComponentFixture<GroupResponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupResponsesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
