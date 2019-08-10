import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostScreeningComponent } from './post-screening.component';

describe('PostScreeningComponent', () => {
  let component: PostScreeningComponent;
  let fixture: ComponentFixture<PostScreeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostScreeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
