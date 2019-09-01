import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RefDataService } from './core/services/ref-data.service';
import { EntitlementService } from './core/services/entitlement.service';

import { isAndroid, isIOS } from 'tns-core-modules/ui/page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public isLoggedInUser = false;

  constructor(
    private refDataService: RefDataService,
    private entitlementService: EntitlementService,
    private router: Router
  ) {

  }

  ngOnInit() {
    if (!isAndroid && !isIOS) {
      this.getUserInformation();
    }
  }

  getUserInformation() {
    let soeId = sessionStorage['soeId'];

    this.entitlementService.getUserInformation(soeId).subscribe(
      (userDetails) => {
        if (!!userDetails) {
          this.entitlementService.setUserInfo(userDetails['userSoeId']);
          this.isLoggedInUser = true;
          this.getRefData();
        } else {
          this.router.navigate(['login']);
        }
        this.observeUserInfo();
      },
      (error) => {
        this.router.navigate(['login']);
        this.observeUserInfo();
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
