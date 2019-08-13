import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { SocketService } from './../../../../core/services/socket.service';

@Component({
  selector: 'app-post-overview-card',
  templateUrl: './post-overview-card.component.html',
  styleUrls: ['./post-overview-card.component.scss']
})
export class PostOverviewCardComponent implements OnInit {
  @Output() emitClick: EventEmitter<any> = new EventEmitter();
  @Output() showScreeningPopup: EventEmitter<boolean> = new EventEmitter();

  applicationCount: number = 1;

  constructor(
    private socketService: SocketService
  ) { }

  ngOnInit() {
    this.socketService
      .onMessage()
      .subscribe((message: string) => {
        this.applicationCount++;
      });
  }

  cardClick() {
    this.emitClick.emit('abc');
  }

  applyToTask() {
    this.showScreeningPopup.emit(true);
  }

}
