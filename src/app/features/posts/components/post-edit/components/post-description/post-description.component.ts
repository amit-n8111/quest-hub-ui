import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { StripHtmlPipe } from './../../../../../../core/pipes/strip-html.pipe';

@Component({
  selector: 'app-post-description',
  templateUrl: './post-description.component.html',
  styleUrls: ['./post-description.component.scss']
})
export class PostDescriptionComponent implements OnInit {
  @Input() taskForm: FormGroup;

  stripHtmlPipeInstance;

  constructor(
  ) { }

  ngOnInit() {
    this.stripHtmlPipeInstance = new StripHtmlPipe();
  }

  get getDescriptionLength() {
    const descriptionLength = this.stripHtmlPipeInstance.transform(this.taskForm.get('taskDescription').value);
    return descriptionLength.length;
  }

}
