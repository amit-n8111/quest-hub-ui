import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PostsService } from './../../services/posts.service';

@Component({
  selector: 'app-my-post-list',
  templateUrl: './my-post-list.component.html',
  styleUrls: ['./my-post-list.component.scss']
})

export class MyPostListComponent implements OnInit {
  displaySidebar: boolean = false;
  showScreeningPopup: boolean = false;

  availableDateRange;

  constructor(
  ) { }

  ngOnInit() {
  }

  showSidebarFn(abc) {
    this.displaySidebar = true;
  }

  showScreeningPopupFn(event) {
    this.showScreeningPopup = true;
  }

  applyToPost() {

  }

}
