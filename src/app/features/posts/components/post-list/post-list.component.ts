import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PostsService } from './../../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  tasks: any[];

  isShowFilters: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.getPostList();
  }

  navigateToEditSection(rowData) {
    this.router.navigate(['edit/', rowData.postId], { relativeTo: this.route });
  }

  navigateToDetailSection(rowData) {
    this.router.navigate([rowData.postId], { relativeTo: this.route });
  }

  getPostList() {
    this.postsService.getPostList().subscribe((taskList) => {
      this.tasks = taskList;
      console.log(this.tasks);
    });
  }

}
