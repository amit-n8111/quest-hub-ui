import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { SocketService } from './../../../../core/services/socket.service';

@Component({
  selector: 'app-post-overview-card',
  templateUrl: './post-overview-card.component.html',
  styleUrls: ['./post-overview-card.component.scss']
})
export class PostOverviewCardComponent implements OnInit {
  @Output() showTaskDetails: EventEmitter<any> = new EventEmitter();
  @Output() showScreeningPopup: EventEmitter<boolean> = new EventEmitter();

  @Input() taskDetails;

  applicationCount: number = 1;

  constructor(
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

}
