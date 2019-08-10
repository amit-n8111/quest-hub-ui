import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSkillsetsComponent } from './post-skillsets.component';

describe('PostSkillsetsComponent', () => {
  let component: PostSkillsetsComponent;
  let fixture: ComponentFixture<PostSkillsetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSkillsetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSkillsetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
