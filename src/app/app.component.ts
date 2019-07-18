import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EntitlementService } from './core/services/entitlement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public isLoggedInUser: boolean = false;

  constructor(
    private entitlementService: EntitlementService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.getUserInformation();
  }

  getUserInformation() {
    this.entitlementService.getUserInformation().subscribe(
      (data) => {
        console.log(data);
        if (data) {

        } else {
          this.router.navigate(['login']);
        }
      }
    );
  }
}
