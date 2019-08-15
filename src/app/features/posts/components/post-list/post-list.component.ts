import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { PostsService } from './../../services/posts.service';
import { SocketService } from './../../../../core/services/socket.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  displaySidebar: boolean = false;
  showScreeningPopup: boolean = false;

  taskApplicationForm: FormGroup = this.fb.group({
    availableDateRange: [''],
    screeningQuestions: this.fb.array([
    ]),
    commentsOrNotes: ['']
  });

  taskList: Array<Object> = [];
  selectedTaskDetails: Object = {};

  constructor(
    private fb: FormBuilder,
    private postService: PostsService,
    private socketService: SocketService
  ) { }

  ngOnInit() {
    this.getTaskList();
  }

  showSidebarFn(selectedTask) {
    this.selectedTaskDetails = selectedTask;
    this.displaySidebar = true;
  }

  showScreeningPopupFn(selectedTask) {
    this.taskApplicationForm.reset();
    this.selectedTaskDetails = selectedTask;
    this.showScreeningPopup = true;
  }

  applyToPost() {
    const taskId = this.selectedTaskDetails['taskId'];

    this.postService.submitTaskApplication(taskId, this.taskApplicationForm.value).subscribe(
      (data) => {
        console.log('Application Successfull.....');
      }
    );

    this.socketService.sendMessage({
      from: 'an58526',
      content: 'Hi my name is amit'
    });
  }

  getTaskList() {
    this.postService.getTaskList().subscribe(
      (data) => {
        this.taskList = data;
      }
    );
  }

}
