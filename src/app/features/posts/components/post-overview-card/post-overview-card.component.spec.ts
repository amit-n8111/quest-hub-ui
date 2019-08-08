import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOverviewCardComponent } from './post-overview-card.component';

describe('PostOverviewCardComponent', () => {
  let component: PostOverviewCardComponent;
  let fixture: ComponentFixture<PostOverviewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOverviewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
