import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-overview',
  templateUrl: './post-overview.component.html',
  styleUrls: ['./post-overview.component.scss']
})
export class PostOverviewComponent implements OnInit {
  @Input() refData;
  @Input() taskForm: FormGroup;

  skills: Array<Object> = [];

  constructor() { }

  ngOnInit() {
  }

  get getSkillItemsByCategory() {
    const taskTopicId = this.taskForm.get('taskTopicId').value;

    const selectedTopic = this.refData['topic'].find((topic) => {
      return topic.id === taskTopicId;
    });

    return selectedTopic && selectedTopic['skills'] ? selectedTopic['skills'] : [];
  }

  public onAdding(tag) {
    tag.id = -1;
  }

}
