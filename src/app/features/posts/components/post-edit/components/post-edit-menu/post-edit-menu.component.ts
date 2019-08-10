import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-edit-menu',
  templateUrl: './post-edit-menu.component.html',
  styleUrls: ['./post-edit-menu.component.scss']
})
export class PostEditMenuComponent implements OnInit {
  @Input() selectedTemplateName;
  @Output() openSection: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openSectionFn(sectionName) {
    this.openSection.emit(sectionName);
  }

}
