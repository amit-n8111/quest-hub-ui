import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RefDataService } from './core/services/ref-data.service';
import { EntitlementService } from './core/services/entitlement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public isLoggedInUser: boolean = false;

  constructor(
    private refDataService: RefDataService,
    private entitlementService: EntitlementService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.getUserInformation();
  }

  getUserInformation() {
    this.entitlementService.getUserInformation().subscribe(
      (userDetails) => {
        if (!!userDetails) {
          this.getRefData();
          this.isLoggedInUser = true;
        } else {
          this.router.navigate(['login']);
          this.observeUserInfo();
        }
      }
    );
  }

  observeUserInfo() {
    this.entitlementService.getUserInfo().subscribe(
      (data) => {
        if (data) {
          this.getRefData();
          this.isLoggedInUser = true;
        } else {
          this.isLoggedInUser = false;
        }
      }
    );
  }

  getRefData() {
    this.refDataService.getRefData().subscribe();
  }
}
