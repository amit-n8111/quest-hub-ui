import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: any[];

  cols: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.posts = [
      {
        'postId': '1',
        'postName': 'postName',
        'postDate': '26/06/1992',
        'postTopic': 'postTopic'
      }
    ];

    this.cols = [
      { field: 'postId', header: 'Post Id' },
      { field: 'postName', header: 'Post Name' },
      { field: 'postDate', header: 'Post Date' },
      { field: 'postTopic', header: 'Post Topic' },
      { field: 'editPost', header: 'Edit Post' }
    ];
  }

  navigateToEditSection(rowData) {
    this.router.navigate(['edit/', rowData.postId], { relativeTo: this.route });
  }

}
