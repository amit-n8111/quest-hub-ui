import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PostsService } from './../../services/posts.service';
import { GrowlService } from './../../../../core/services/growl.service';
import { LoaderService } from './../../../../core/services/loader.service';
import { EntitlementService } from './../../../../core/services/entitlement.service';

import { TASK_SECTION, TASK_MESSAGES } from './constants/post.constants';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  selectedTemplateId: number = TASK_SECTION.TASK_OVERVIEW;

  taskForm: FormGroup = this.fb.group({
    id: [-1],
    taskId: [-1],
    taskName: [''],
    topicId: [''],
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
    rewardTypeName: [''],
    taskCreatedBy: [this.entitlementService.userDetails['soeId']],
    screeningQuestions: this.fb.array([
    ]),
    skills: [[]]
  });

  constructor(
    private fb: FormBuilder,
    private postService: PostsService,
    private entitlementService: EntitlementService,
    private activateRoute: ActivatedRoute,
    private growlService: GrowlService,
    private router: Router,
    private loaderService: LoaderService
  ) { }

  get TASK_SECTION() { return TASK_SECTION; }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      if (params && +params.id) {
        this.getTaskDetails(+params.id);
      } else {
        this.resetTaskForm();
      }
    });
  }

  openSection(sectionId) {
    this.selectedTemplateId = sectionId;
  }

  submitTaskForm() {
    this.loaderService.setLoader(true);

    this.postService.submitTask(this.taskForm.value).subscribe(
      (data) => {
        // Todo: Remove setTimeout, its just for showing loader.
        setTimeout(() => {
          this.loaderService.setLoader(false);
          this.router.navigate(['/posts']);
          this.growlService.showMessage(TASK_MESSAGES.SUCCESS_MESSAGES);
        }, 5000);
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
      topicId: taskFormDetails.topicId,
      taskTopicName: taskFormDetails.taskTopicName,
      taskStatusId: taskFormDetails.taskStatusId,
      taskDescription: taskFormDetails.taskDescription,
      taskType: taskFormDetails.taskType,
      taskDueDate: taskFormDetails.taskDueDate,
      taskCreateDate: taskFormDetails.taskCreateDate,
      taskCreatedBy: taskFormDetails.taskCreatedBy,
      manHoursNeeded: taskFormDetails.manHoursNeeded,
      rewardTypeId: taskFormDetails.rewardTypeId,
      skills: taskFormDetails.skills,
      id: taskFormDetails.id
    });

    this.taskForm.setControl('screeningQuestions', this.createQuestionsForm(taskFormDetails.screeningQuestions));
  }

  createQuestionsForm(questions) {
    let questionsForm: FormArray = this.fb.array([]);

    questions.forEach(question => {
      questionsForm.push(
        this.fb.group({
          id: question.id,
          question: question.question
        })
      );
    });

    return questionsForm;
  }

  resetTaskForm() {
    this.taskForm.reset();
    this.taskForm.patchValue({
      id: -1,
      taskId: -1
    });
    this.taskForm.setControl('screeningQuestions', this.fb.array([]));
  }

}
