import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

import { TASK_MESSAGES } from './../post-edit/constants/post.constants';

import { PostsService } from './../../services/posts.service';
import { GrowlService } from './../../../../core/services/growl.service';
import { LoaderService } from './../../../../core/services/loader.service';
import { SocketService } from './../../../../core/services/socket.service';
import { RefDataService } from './../../../../core/services/ref-data.service';

import { isAndroid, isIOS } from 'tns-core-modules/ui/page';

import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  data = [
    {
      "taskId": 1,
      "taskName": "Needed a web developer to create a carousel component.",
      "numberOfApplications": 1,
      "hoursNeeded": 8,
      "taskType": "Micro",
      "rewardType": "Gratitude",
      "description": "I want to add a carousel component  for my HTML page <ul><li>Angular</li><li>HTML</li></ul>",
      "skills": [{ "skill": "Angular 7" }, { "skill": "HTML" }, { "skill": "CSS" }]
    }, {
      "taskId": 2,
      "taskName": "Needed a web developer",
      "numberOfApplications": 1,
      "hoursNeeded": 8,
      "taskType": "Micro",
      "rewardType": "Gratitude",
      "description": "I want to add a carousel component  for my HTML page <ul><li>Angular</li><li>HTML</li></ul>",
      "skills": [{ "skill": "Angular 7" }, { "skill": "HTML" }, { "skill": "CSS" }]
    },
    {
      "taskId": 3,
      "taskName": "Needed a web developer",
      "numberOfApplications": 1,
      "hoursNeeded": 8,
      "taskType": "Micro",
      "rewardType": "Gratitude",
      "description": "I want to add a carousel component  for my HTML page <ul><li>Angular</li><li>HTML</li></ul>",
      "skills": [{ "skill": "Angular 7" }, { "skill": "HTML" }, { "skill": "CSS" }]
    }, {
      "taskId": 4,
      "taskName": "Needed a web developer",
      "numberOfApplications": 1,
      "hoursNeeded": 8,
      "taskType": "Micro Task",
      "rewardType": "Gratitude",
      "description": "I want to add a carousel component  for my HTML page <ul><li>Angular</li><li>HTML</li></ul>",
      "skills": [{ "skill": "Angular 7" }, { "skill": "HTML" }, { "skill": "CSS" }]
    },
    {
      "taskId": 5,
      "taskName": "Needed a web developer",
      "numberOfApplications": 1,
      "hoursNeeded": 8,
      "taskType": "Micro Task",
      "rewardType": "Gratitude",
      "description": "I want to add a carousel component  for my HTML page <ul><li>Angular</li><li>HTML</li></ul>",
      "skills": [{ "skill": "Angular 7" }, { "skill": "HTML" }, { "skill": "CSS" }]
    }, {
      "taskId": 6,
      "taskName": "Needed a web developer",
      "numberOfApplications": 1,
      "hoursNeeded": 8,
      "taskType": "Micro Task",
      "rewardType": "Gratitude",
      "description": "I want to add a carousel component  for my HTML page <ul><li>Angular</li><li>HTML</li></ul>",
      "skills": [{ "skill": "Angular 7" }, { "skill": "HTML" }, { "skill": "CSS" }]
    }
  ];
  displaySidebar: boolean = false;
  showScreeningPopup: boolean = false;

  taskApplicationForm: FormGroup = this.fb.group({
    startDate: [''],
    endDate: [''],
    screeningQuestions: this.fb.array([]),
    commentsOrNotes: ['']
  });

  refData;
  taskList: Array<Object> = [];
  selectedTaskDetails: Object = {};

  constructor(
    private mobileRouter: RouterExtensions,
    private fb: FormBuilder,
    private refDataService: RefDataService,
    private growlService: GrowlService,
    private postService: PostsService,
    private loaderService: LoaderService,
    private socketService: SocketService
  ) { }

  ngOnInit() {
    if (!isAndroid && !isIOS) {
      this.getRefData();
      this.getTaskList();
    }
  }

  showSidebarFn(selectedTask) {
    this.selectedTaskDetails = selectedTask;
    this.displaySidebar = true;
  }

  showScreeningPopupFn(selectedTask) {
    this.taskApplicationForm.reset();
    this.taskApplicationForm.setControl('screeningQuestions', this.createQuestionsForm(selectedTask.screeningQuestions));
    this.selectedTaskDetails = selectedTask;
    this.showScreeningPopup = true;
  }

  createQuestionsForm(questions) {
    let questionsForm: FormArray = this.fb.array([]);

    questions.forEach(question => {
      questionsForm.push(
        this.fb.group({
          answer: [],
          question: this.fb.group({
            id: question.id,
            question: question.question
          })
        })
      );
    });

    return questionsForm;
  }

  applyToPost() {
    this.loaderService.setLoader(true);
    const taskId = this.selectedTaskDetails['taskId'];

    this.postService.submitTaskApplication(taskId, this.taskApplicationForm.value).subscribe(
      (data) => {
        this.loaderService.setLoader(false);
        this.growlService.showMessage(TASK_MESSAGES.TASK_APPLICATION_SEND);
      }
    );

    // Todo: This is socket code, removing for now.
    // this.socketService.sendMessage({
    //   from: 'an58526',
    //   content: 'Hi my name is amit'
    // });
  }

  getTaskList() {
    this.loaderService.setLoader(true);

    this.postService.getTaskList().subscribe(
      (data) => {
        this.loaderService.setLoader(false);
        this.taskList = data;
      }
    );
  }

  getQuestionName(index) {
    return (this.taskApplicationForm.get('screeningQuestions') as FormArray).at(index).get('question').get('question').value;
  }

  getRefData() {
    this.refDataService.getRefData().subscribe(
      (data) => {
        this.refData = data;
      }
    );
  }

  getColumns(task) {
    let columns = 'auto, auto';
    task.skills.forEach((skill) => {
      columns += ',auto';
    });
    return columns;
  }

  showTaskDetails(taskDetails) {
    console.log('---------------------------- Moving To Post Details -------------------------------- ');
    this.mobileRouter.navigate(
      ['search-tasks', taskDetails.taskId], {
      transition: {
        name: 'fade'
      }
    }
    );
  }

}
