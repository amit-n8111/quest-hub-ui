import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

import { TASK_MESSAGES } from './../post-edit/constants/post.constants';

import { PostsService } from './../../services/posts.service';
import { GrowlService } from './../../../../core/services/growl.service';
import { LoaderService } from './../../../../core/services/loader.service';
import { SocketService } from './../../../../core/services/socket.service';
import { RefDataService } from './../../../../core/services/ref-data.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  displaySidebar: boolean = false;
  showScreeningPopup: boolean = false;

  showAddSkillsPopup: boolean = false;

  taskApplicationForm: FormGroup = this.fb.group({
    startDate: [''],
    endDate: [''],
    screeningQuestions: this.fb.array([]),
    commentsOrNotes: ['']
  });

  refData;
  taskList: Array<Object> = [];

  selectedSkills: Array<Object> = [];
  selectedTaskDetails: Object = {};

  constructor(
    private fb: FormBuilder,
    private refDataService: RefDataService,
    private growlService: GrowlService,
    private postService: PostsService,
    private loaderService: LoaderService,
    private socketService: SocketService
  ) { }

  ngOnInit() {
    this.getRefData();
    this.getTaskList();
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
        this.showAddSkillsPopupFn();
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

  addSkills() {
    this.growlService.showMessage('Skills Added Successfully...');
  }

  showAddSkillsPopupFn() {
    this.selectedSkills = [];

    this.selectedSkills = this.selectedTaskDetails['taskSkills'];
    this.showAddSkillsPopup = true;
  }

  closeShowSkillsSuggestionPopup() {
    this.selectedSkills = [];
    this.showAddSkillsPopup = false;
  }

}
