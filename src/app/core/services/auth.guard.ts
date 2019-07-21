import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { EntitlementService } from './entitlement.service';

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private entitlementService: EntitlementService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.checkUserLoggedIn();
  }

  checkUserLoggedIn() {
    if (this.entitlementService.isUserLoggedIn) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
