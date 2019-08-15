import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TASK_SECTION } from './../../constants/post.constants';

@Component({
  selector: 'app-post-edit-menu',
  templateUrl: './post-edit-menu.component.html',
  styleUrls: ['./post-edit-menu.component.scss']
})
export class PostEditMenuComponent implements OnInit {
  @Input() selectedTemplateId;
  @Output() openSection: EventEmitter<string> = new EventEmitter();

  constructor() { }

  get TASK_SECTION() { return TASK_SECTION; }

  ngOnInit() {
  }

  openSectionFn(sectionName) {
    this.openSection.emit(sectionName);
  }

}
