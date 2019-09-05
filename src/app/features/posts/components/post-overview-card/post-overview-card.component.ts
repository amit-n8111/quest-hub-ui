import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

import { PostsService } from './../../services/posts.service';
import { GrowlService } from './../../../../core/services/growl.service';
import { LoaderService } from './../../../../core/services/loader.service';
import { SocketService } from './../../../../core/services/socket.service';

import { TASK_STATUSES } from './../post-edit/constants/post.constants';

import { EntitlementService } from './../../../../core/services/entitlement.service';

@Component({
  selector: 'app-post-overview-card',
  templateUrl: './post-overview-card.component.html',
  styleUrls: ['./post-overview-card.component.scss']
})
export class PostOverviewCardComponent implements OnInit {
  @Output() showTaskDetails: EventEmitter<any> = new EventEmitter();
  @Output() showScreeningPopup: EventEmitter<boolean> = new EventEmitter();

  @Input() refData;
  @Input() taskDetails;
  @Input() isMyTask: boolean = false;

  applicationCount: number = 1;

  constructor(
    private entitlementService: EntitlementService,
    private router: Router,
    private growlService: GrowlService,
    private loaderService: LoaderService,
    private postsService: PostsService,
    private socketService: SocketService
  ) { }

  ngOnInit() {
    // this.socketService
    //   .onMessage()
    //   .subscribe((message: string) => {
    //     this.applicationCount++;
    //   });
  }

  get TASK_STATUSES() { return TASK_STATUSES; }

  get loggedInUser() { return this.entitlementService.userDetailsSoeId; }

  openTaskDetails() {
    this.showTaskDetails.emit(this.taskDetails);
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

    return (entityDataId === 'topic') ? entityObj['topicName'] : entityObj['name'];
  }

  editTask(taskId) {
    this.router.navigate([`posts/edit/${taskId}`]);
  }

}
