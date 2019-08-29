import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { EntitlementService } from './../core/services/entitlement.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
        console.log('....................Users SoeId.........');
        console.log(this.soeId);
        sessionStorage['soeId'] = data['userSoeId'];
        this.entitlementService.setUserInfo(data['userSoeId']);
        this.router.navigate(['/home']);
      }
    );
  }

  forgotPassword() {
    console.log('....................Forgot Passowrd Functionality is not there.........');
  }

}
