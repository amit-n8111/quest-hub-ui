import { Component, OnInit } from '@angular/core';

import { LoaderService } from './../../services/loader.service';
import { EntitlementService } from './../../services/entitlement.service';
import { NotificationService } from './../../services/notification.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {

  notifications = [];
  notificationCount: number = 0;

  constructor(
    private loaderService: LoaderService,
    private notificationService: NotificationService,
    public entitlementService: EntitlementService
  ) { }

  ngOnInit() {
    this.getNotifications();
  }

  logOutUser() {
    sessionStorage.clear();
    this.entitlementService.setUserInfo('');
  }

  getNotifications() {
    this.notificationService.getNotifications(this.entitlementService.userDetails).subscribe(
      (data) => {
        this.notificationCount = data['count'];
        this.notifications = data['notifications'];
      }
    );
  }

}
