import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-review',
  templateUrl: './post-review.component.html',
  styleUrls: ['./post-review.component.scss']
})
export class PostReviewComponent implements OnInit {
  @Input() taskForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
