import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-review',
  templateUrl: './post-review.component.html',
  styleUrls: ['./post-review.component.scss']
})
export class PostReviewComponent implements OnInit {
  @Input() refData;
  @Input() taskForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  getItemNameById(typeId, entityDataId) {
    let entityObj = this.refData[entityDataId].find((entity) => {
      return entity.id === typeId;
    });

    if (!entityObj) {
      return '';
    }

    return (entityDataId == 'topic') ? entityObj['topicName'] : entityObj['name'];
  }

}
