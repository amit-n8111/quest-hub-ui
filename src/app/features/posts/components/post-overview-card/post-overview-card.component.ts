import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { PostsService } from './../../services/posts.service';
import { GrowlService } from './../../../../core/services/growl.service';
import { LoaderService } from './../../../../core/services/loader.service';
import { SocketService } from './../../../../core/services/socket.service';

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

  applicationCount: number = 1;

  constructor(
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

}
