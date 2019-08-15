import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-description',
  templateUrl: './post-description.component.html',
  styleUrls: ['./post-description.component.scss']
})
export class PostDescriptionComponent implements OnInit {
  @Input() taskForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
