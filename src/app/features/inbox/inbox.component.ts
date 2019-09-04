import { Component, OnInit } from '@angular/core';

import { LoaderService } from './../../core/services/loader.service';
import { NotificationService } from './../../core/services/notification.service';
import { InboxService } from './inbox.service';
import { HelperService } from './../../core/services/helper.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})

export class InboxComponent implements OnInit {
  notifications = [];
  selectedNotification;
  selectedNotificationIndex: number = 0;

  columns = [
    { field: 'soeId', header: 'SOE ID' },
    { field: 'name', header: 'Applicants Name' },
    { field: 'score', header: 'Score' },
    { field: 'availableDates', header: 'Available Dates' }
  ];

  constructor(
    private helperService: HelperService,
    private inboxService: InboxService,
    private loaderService: LoaderService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.getAllNotiifcations();
  }

  showNotificationDetails(notification, index) {
    this.loaderService.setLoader(true);
    this.selectedNotificationIndex = index;
    this.selectedNotification = notification;
    setTimeout(() => {
      this.loaderService.setLoader(false);
    }, 500);
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

  approveUser(notification) {
    this.loaderService.setLoader(true);
    this.inboxService.approveUser(notification.notification.taskId, notification.userInfo.soeId).subscribe(
      (data) => {
        this.loaderService.setLoader(false);
      }
    );
  }

  navigateToUser(soeId) {
    const url = this.helperService.getResourceURL('profiles/') + `${soeId}`;
    window.open(url);
  }

}
