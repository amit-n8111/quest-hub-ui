import { Component, OnInit } from '@angular/core';

import { SocketService } from './../../../../core/services/socket.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  displaySidebar: boolean = false;
  showScreeningPopup: boolean = false;

  availableDateRange;

  constructor(
    private socketService: SocketService
  ) { }

  ngOnInit() {
  }

  showSidebarFn(abc) {
    this.displaySidebar = true;
  }

  showScreeningPopupFn(event) {
    this.showScreeningPopup = true;
  }

  applyToPost() {
    this.socketService.sendMessage({
      from: 'an58526',
      content: 'Hi my name is amit'
    });
  }

}
