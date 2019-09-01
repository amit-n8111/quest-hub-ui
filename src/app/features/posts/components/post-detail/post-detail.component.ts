import { Component, OnInit, Output, EventEmitter, Input, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from './../../services/posts.service';
import { GrowlService } from './../../../../core/services/growl.service';
import { LoaderService } from './../../../../core/services/loader.service';
import { RefDataService } from './../../../../core/services/ref-data.service';

import { isAndroid, isIOS } from 'tns-core-modules/ui/page';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';
import { PostApplicationComponent } from './components/post-application/post-application.component.tns';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Output() showScreeningPopup: EventEmitter<boolean> = new EventEmitter();

  @Input() refData;
  @Input() taskDetails;

  isSidebar: boolean = true;

  constructor(
    private modalService: ModalDialogService,
    private viewContainerRef: ViewContainerRef,
    private refDataService: RefDataService,
    private activatedRoute: ActivatedRoute,
    private growlService: GrowlService,
    private loaderService: LoaderService,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    if (!isAndroid && !isIOS) {
      this.getRefData();
    } else {
      this.setTaskDetails();
    }

    this.activatedRoute.params.subscribe(params => {
      if (params && +params.id) {
        this.isSidebar = false;
        // this.getTaskDetails(+params.id);

        console.log('--------> Task Id =>' + +params.id);
      }
    });
  }

  openPostDetails() {
    const taskId = this.taskDetails.taskId;
    window.open('http://localhost:4200/posts/' + taskId);
  }

  applyToTask() {
    this.showScreeningPopup.emit(this.taskDetails);
  }

  markAsFavorite() {
    const taskId = this.taskDetails.taskId;
    this.loaderService.setLoader(true);

    this.postsService.markTaskAsFavorite(taskId).subscribe(
      (isSuccess) => {
        if (isSuccess === true) {
          this.loaderService.setLoader(false);
          this.growlService.showMessage('Task Marked As Favorite!');
        } else {
          this.loaderService.setLoader(false);
        }
      }
    );
  }

  getItemNameById(typeId, entityDataId) {
    let entityObj = this.refData[entityDataId].find((entity) => {
      return entity.id === typeId;
    });

    if (!entityObj) {
      return '';
    }

    return (entityDataId == 'topic') ? entityObj['topicName'] : entityObj['name'];
  }

  getTaskDetails(taskId) {
    this.loaderService.setLoader(true);

    this.postsService.getTaskDetailsByTaskId(taskId).subscribe(
      (data) => {
        this.taskDetails = data;
        this.loaderService.setLoader(false);
      }
    );
  }

  getRefData() {
    this.refDataService.getRefData().subscribe(
      (data) => {
        this.refData = data;
      }
    );
  }

  setTaskDetails() {
    this.taskDetails = {
      "taskId": 1,
      "taskName": "Needed a web developer to create a carousel component.",
      "numberOfApplications": 1,
      "hoursNeeded": 8,
      "taskType": "Micro",
      "rewardType": "Gratitude",
      "startDate": "Sun Sep 01 2019 13:52:15 GMT+0530 (India Standard Time)",
      "endDate": "Sun Sep 14 2019 13:52:15 GMT+0530 (India Standard Time)",
      "description": "I want to add a carousel component  for my HTML page <ul><li>Angular</li><li>HTML</li></ul>",
      "skills": [{ "skill": "Angular 7" }, { "skill": "HTML" }, { "skill": "CSS" }]
    };
  }

  getColumns(task) {
    let columns = 'auto, auto';
    task.skills.forEach((skill) => {
      columns += ',auto';
    });
    return columns;
  }

  showApplicationForm() {
    const options: ModalDialogOptions = {
      viewContainerRef: this.viewContainerRef,
      fullscreen: false,
      context: { taskDetails: this.taskDetails }
    };
    console.log('coming here');
    this.modalService.showModal(PostApplicationComponent, options);
  }
}
