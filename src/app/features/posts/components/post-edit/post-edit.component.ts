import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  taskDetails: any = {};

  selectedDocumentValue: string;
  selectedDocumentIndex: number = 0;

  constructor(
    private router: Router,
    private postsService: PostsService,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      const postId = +params.id;

      if (postId) {
        this.getPostDetails(params.id);
      } else {
        this.createPost();
      }
    });
  }

  savePostDetails() {
    this.router.navigate(['/posts']);
  }

  getPostDetails(postId) {
    this.postsService.getPostDetailsByPostId(postId).subscribe(
      (postDetails) => {
        this.selectedDocumentIndex = 0;
        this.selectedDocumentValue = postDetails.documents[0].documentValue;
        this.taskDetails = postDetails;
      }
    );
  }

  createPost() {
    this.getPostDetails(1);
  }

  selectDocumentSection(documentDetails) {
    this.selectedDocumentValue = documentDetails.documentValue;
  }

  changeDocumentByIndex() {
    this.selectedDocumentValue = this.taskDetails.documents[this.selectedDocumentIndex + 1].documentValue;
  }

}
