import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from './../../services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  postDetails: any = {};

  constructor(
    private postsService: PostsService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.getPostDetails(params.id);
    });
  }

  getPostDetails(postId) {
    this.postsService.getPostDetailsByPostId(postId).subscribe(
      (postDetails) => {
        this.postDetails = postDetails;
      }
    );
  }

  openPostDetails() {
    window.open('http://localhost:4200/posts/3');
  }

}
