import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from './../../services/posts.service';
import { EntitlementService } from './../../../../core/services/entitlement.service';

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
    taskTopicId: [''],
    taskTopicName: [''],
    taskStatusId: [''],
    taskStatusName: [''],
    taskDescription: [''],
    taskType: [''],
    taskTypeName: [''],
    taskDueDate: [''],
    taskCreateDate: [''],
    manHoursNeeded: [''],
    rewardTypeId: [''],
    taskCreatedBy: [this.entitlementService.userDetails['soeId']],
    screeningQuestions: this.fb.array([
    ]),
    taskSkills: [[]]
  });

  constructor(
    private fb: FormBuilder,
    private postService: PostsService,
    private entitlementService: EntitlementService,
    private activateRoute: ActivatedRoute
  ) { }

  get TASK_SECTION() { return TASK_SECTION; }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      if (params && +params.id) {
        this.getTaskDetails(+params.id);
      } else {
        this.taskForm.reset();
      }
    });
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

  getTaskDetails(taskId) {
    this.postService.getTaskDetailsByTaskId(taskId).subscribe(
      (data) => {
        console.log(data);
        this.fillTheDummyForm(data);
      }
    );
  }

  fillTheDummyForm(taskFormDetails) {
    this.taskForm.patchValue({
      taskId: taskFormDetails.taskId,
      taskName: taskFormDetails.taskName,
      taskTopicId: taskFormDetails.taskTopicId,
      taskTopicName: taskFormDetails.taskTopicName,
      taskStatusId: taskFormDetails.taskStatusId,
      taskDescription: taskFormDetails.taskDescription,
      taskType: taskFormDetails.taskType,
      taskDueDate: taskFormDetails.taskDueDate,
      taskCreateDate: taskFormDetails.taskCreateDate,
      taskCreatedBy: taskFormDetails.taskCreatedBy,
      manHoursNeeded: taskFormDetails.manHoursNeeded,
      rewardTypeId: taskFormDetails.rewardTypeId,
      screeningQuestions: taskFormDetails.screeningQuestions,
      taskSkills: taskFormDetails.taskSkills
    });
  }

}
