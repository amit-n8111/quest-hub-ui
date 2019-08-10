import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOverviewCardComponent } from './profile-overview-card.component';

describe('ProfileOverviewCardComponent', () => {
  let component: ProfileOverviewCardComponent;
  let fixture: ComponentFixture<ProfileOverviewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileOverviewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
