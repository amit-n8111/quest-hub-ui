import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { PostsService } from './../../../../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-overview',
  templateUrl: './post-overview.component.html',
  styleUrls: ['./post-overview.component.scss']
})
export class PostOverviewComponent implements OnInit {
  @Input() refData;
  @Input() taskForm: FormGroup;

  skills: Array<Object> = [];
  filteredTaskNames = [];
  filteredTopics = [];

  taskNameObj = { id: -1, taskName: '' };
  taskNameChangeSubscription: Subscription;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    if (this.taskForm.get('taskName').value) {
      this.taskNameObj['taskName'] = this.taskForm.get('taskName').value;
    }

    this.taskNameChangeSubscription = this.taskForm.get('taskName').valueChanges.subscribe(
      (data) => {
        this.taskNameObj['taskName'] = data;
        this.taskNameObj = JSON.parse(JSON.stringify(this.taskNameObj));
        this.taskNameChangeSubscription.unsubscribe();
      }
    );

    this.filteredTopics = this.refData['topic'];
  }

  get getSkillItemsByCategory() {
    const taskTopicId = this.taskForm.get('taskTopicId').value;

    const selectedTopic = this.refData['topic'].find((topic) => {
      return topic.id === taskTopicId;
    });

    return selectedTopic && selectedTopic['skills'] ? selectedTopic['skills'] : [];
  }

  showTaskNameSuggestions(taskName) {
    this.taskForm.get('taskName').setValue(taskName.query);

    if (!this.taskForm.get('taskName').value) {
      this.filteredTaskNames = [];
      this.filteredTopics = [];
      return true;
    }

    this.postsService.getTaskSuggestions(this.taskForm.get('taskName').value).subscribe(
      (data) => {
        if (Object.keys(data).length) {
          this.filteredTaskNames = data['relatedTasks'];
          this.filteredTopics = data['relatedTopics'] || this.refData['topic'];
        }
      }
    );
  }

  onTaskNameSelect(value) {
    this.taskForm.get('taskName').setValue(value.taskName);
  }

}
