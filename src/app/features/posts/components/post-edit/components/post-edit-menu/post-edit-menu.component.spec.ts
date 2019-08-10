import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEditMenuComponent } from './post-edit-menu.component';

describe('PostEditMenuComponent', () => {
  let component: PostEditMenuComponent;
  let fixture: ComponentFixture<PostEditMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostEditMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEditMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
