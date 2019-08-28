import { Component, OnInit } from '@angular/core';

import { LoaderService } from './../../core/services/loader.service';
import { NotificationService } from './../../core/services/notification.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  notifications = [];
  selectedNotification;

  constructor(
    private loaderService: LoaderService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.getAllNotiifcations();
  }

  showNotificationDetails(notification) {
    this.selectedNotification = notification;
  }

  getAllNotiifcations() {
    this.loaderService.setLoader(true);

    this.notificationService.getAllNotifications().subscribe(
      (notiifcations) => {
        this.notifications = notiifcations;
        this.selectedNotification = this.notifications[0];
        this.loaderService.setLoader(false);
      }
    );
  }

}
