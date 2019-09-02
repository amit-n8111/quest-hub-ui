import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { PostsService } from './../../../../services/posts.service';

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

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
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
    this.postsService.getTaskSuggestions(taskName).subscribe(
      (data) => {
        if (Object.keys(data).length) {
          this.filteredTaskNames = data['relatedTasks'];
          this.filteredTopics = data['relatedTopics'] || this.refData['topic'];
        }
      }
    );
  }

}
