import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PostsService } from './../../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: any[];

  cols: any[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.cols = [
      { field: 'postId', header: 'Post Id' },
      { field: 'postName', header: 'Post Name' },
      { field: 'postDate', header: 'Post Date' },
      { field: 'postTopic', header: 'Post Topic' },
      { field: 'editPost', header: 'Edit Post' }
    ];

    this.getPostList();
  }

  navigateToEditSection(rowData) {
    this.router.navigate(['edit/', rowData.postId], { relativeTo: this.route });
  }

  navigateToDetailSection(rowData) {
    this.router.navigate([rowData.postId], { relativeTo: this.route });
  }

  getPostList() {
    this.postsService.getPostList().subscribe((postList) => {
      this.posts = postList;
    });
  }

}
