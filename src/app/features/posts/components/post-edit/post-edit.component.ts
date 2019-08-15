import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { PostsService } from './../../services/posts.service';

import { TASK_SECTION } from './constants/post.constants';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  selectedTemplateId: number = TASK_SECTION.TASK_OVERVIEW;

  taskForm: FormGroup = this.fb.group({
    taskId: ['1'],
    taskName: [''],
    taskTopic: [''],
    taskStatusId: [''],
    taskDescription: [''],
    taskType: [''],
    taskDueDate: [''],
    taskCreateDate: [''],
    taskCreatedBy: [''],
    screeningQuestions: this.fb.array([
    ]),
    taskSkills: [[]]
  });

  constructor(
    private fb: FormBuilder,
    private postService: PostsService
  ) { }

  get TASK_SECTION() { return TASK_SECTION; }

  ngOnInit() {
  }

  openSection(sectionId) {
    this.selectedTemplateId = sectionId;
  }

  submitTaskForm() {
    const taskId = this.taskForm.get('taskId').value;

    this.postService.submitTask(taskId, this.taskForm.value).subscribe(
      (data) => {
        console.log(data);
      });
  }

  nextSection() {
    this.selectedTemplateId++;
  }

  previousSection() {
    this.selectedTemplateId--;
  }

}
