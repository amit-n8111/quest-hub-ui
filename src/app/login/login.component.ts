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
    this.entitlementService.getUserInformation(this.soeId).subscribe(
      (data) => {
        // Todo: Remove below line as user is not coming here.
        data['soeId'] = 'AN58526';

        sessionStorage['soeId'] = data['soeId'];
        this.entitlementService.setUserInfo({ 'soeId': data['soeId'] });
        this.router.navigate(['/home']);
      }
    );
  }

}
