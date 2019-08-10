import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  selectedTemplateName: string = 'taskOverviewTemplate';

  constructor(
  ) { }

  ngOnInit() {

  }

  openSection(sectionName) {
    this.selectedTemplateName = sectionName;
  }

}
