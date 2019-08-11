import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from './../../services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  @Output() showScreeningPopup: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private postsService: PostsService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  openPostDetails() {
    window.open('http://localhost:4200/posts/3');
  }

  applyToTask() {
    this.showScreeningPopup.emit(true);
  }

}
