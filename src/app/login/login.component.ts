import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { EntitlementService } from './../core/services/entitlement.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public soeId: string = '';

  constructor(
    private router: Router,
    private entitlementService: EntitlementService
  ) { }

  ngOnInit() {
  }

  logIn() {
    if (this.soeId.length === 7) {
      this.entitlementService.setUserInfo(this.soeId);
      this.router.navigate(['/posters']);
    }

    return true;
  }

}
