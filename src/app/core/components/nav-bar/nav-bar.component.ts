import { Component, OnInit } from '@angular/core';

import { EntitlementService } from './../../services/entitlement.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {

  constructor(
    public entitlementService: EntitlementService
  ) { }

  ngOnInit() {
  }

  logOutUser() {
    sessionStorage.clear();
    this.entitlementService.setUserInfo('');
  }

}
