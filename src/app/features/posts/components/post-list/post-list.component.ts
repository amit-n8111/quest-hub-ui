import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  displaySidebar: boolean = false;
  showScreeningPopup: boolean = false;

  availableDateRange;

  constructor() { }

  ngOnInit() {
  }

  showSidebarFn(abc) {
    this.displaySidebar = true;
  }

  showScreeningPopupFn(event) {
    this.showScreeningPopup = true;
  }

}
