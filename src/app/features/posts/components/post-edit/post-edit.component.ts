import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PostsService } from './../../services/posts.service';
import { GrowlService } from './../../../../core/services/growl.service';
import { LoaderService } from './../../../../core/services/loader.service';
import { RefDataService } from './../../../../core/services/ref-data.service';
import { EntitlementService } from './../../../../core/services/entitlement.service';

import { TASK_SECTION, TASK_MESSAGES } from './constants/post.constants';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  showSampleTemplates: boolean = false;
  startingTaskType: string = 'newTask';
  selectedTemplate;

  refData;
  selectedTemplateId: number = TASK_SECTION.TASK_OVERVIEW;

  taskForm: FormGroup = this.fb.group({
    id: [-1],
    taskId: [-1],
    taskName: [''],
    taskTopicId: [''],
    taskTopicName: [''],
    taskStatusId: [''],
    taskStatusName: [''],
    taskTypeId: [''],
    taskTypeName: [''],
    rewardTypeId: [''],
    rewardTypeName: [''],
    taskDescription: [''],
    taskDueDate: [''],
    taskCreateDate: [''],
    manHoursNeeded: [''],
    taskCreatedBy: this.entitlementService.userDetailsSoeId,
    screeningQuestions: this.fb.array([
    ]),
    skills: [[]],
    backendSkills: [[]],
    uiUxSkills: [[]],
    otherSkills: [[]]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private postService: PostsService,
    private growlService: GrowlService,
    private loaderService: LoaderService,
    private activateRoute: ActivatedRoute,
    private refDataService: RefDataService,
    private entitlementService: EntitlementService
  ) { }

  get TASK_SECTION() { return TASK_SECTION; }

  ngOnInit() {
    this.getRefData();

    this.activateRoute.params.subscribe(params => {
      if (params && +params.id) {
        this.getTaskDetails(+params.id);
      } else {
        this.showSampleTemplates = true;
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
        }, 2000);
      });
  }

  nextSection() {
    this.selectedTemplateId++;
  }

  previousSection() {
    this.selectedTemplateId--;
  }

  getTaskDetails(taskId) {
    this.loaderService.setLoader(true);

    this.postService.getTaskDetailsByTaskId(taskId).subscribe(
      (data) => {
        this.patchFormData(data);
        this.loaderService.setLoader(false);
      }
    );
  }

  patchFormData(taskFormDetails) {
    this.taskForm.patchValue({
      id: taskFormDetails.id,
      taskId: taskFormDetails.taskId,
      taskName: taskFormDetails.taskName,
      taskTopicId: taskFormDetails.taskTopicId,
      taskTopicName: taskFormDetails.taskTopicName,
      taskStatusId: taskFormDetails.taskStatusId,
      taskStatusName: taskFormDetails.taskStatusName,
      taskDescription: taskFormDetails.taskDescription,
      taskTypeId: taskFormDetails.taskTypeId,
      taskTypeName: taskFormDetails.taskTypeName,
      taskDueDate: new Date(taskFormDetails.taskDueDate),
      taskCreateDate: taskFormDetails.taskCreateDate,
      taskCreatedBy: taskFormDetails.taskCreatedBy,
      manHoursNeeded: taskFormDetails.manHoursNeeded,
      rewardTypeId: taskFormDetails.rewardTypeId,
      rewardTypeName: taskFormDetails.rewardTypeName,
      skills: taskFormDetails.skills,
      backendSkills: taskFormDetails.backendSkills,
      uiUxSkills: taskFormDetails.uiUxSkills,
      otherSkills: taskFormDetails.otherSkills
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
      taskId: -1,
      taskCreatedBy: this.entitlementService.userDetailsSoeId
    });
    this.taskForm.setControl('screeningQuestions', this.fb.array([]));
  }

  getRefData() {
    this.refDataService.getRefData().subscribe(
      (data) => {
        this.refData = data;
      }
    );
  }

  continueTaskCreation(startingTaskType) {
    switch (startingTaskType) {
      case 'newTask':
        break;
      case 'existingTask':
        break;
      case 'templateTask':
        this.patchFormData(this.selectedTemplate);
        break;
    }

    this.showSampleTemplates = false;
  }

}
