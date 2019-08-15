import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-overview',
  templateUrl: './post-overview.component.html',
  styleUrls: ['./post-overview.component.scss']
})
export class PostOverviewComponent implements OnInit {

  @Input() taskForm: FormGroup;

  taskTopics: Array<Object> = [
    {
      topicId: 1,
      topicName: 'Web Development'
    },
    {
      topicId: 2,
      topicName: 'Web Design'
    },
    {
      topicId: 3,
      topicName: 'Db Design'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
