import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';

import { HelperService } from './helper.service';
import { CoreConstants } from '../core.constants';
import { Observable, of, Subject } from 'rxjs';

@Injectable()
export class EntitlementService {
  public userDetails: Object;
  public userInfoChangeObserver$ = new Subject();

  constructor(
    private helperService: HelperService,
    private http: HttpClient
  ) { }

  getUserInformation(soeId): Observable<Object> {
    // const resourceURL = this.helperService.getResourceURL(CoreConstants.USERS);

    // const params = { params: { soeId } };

    // return this.http.get(resourceURL, params);


    // Todo: Remove this once all service changes are done.
    return of({ soeId: 'AN58526' });
  }

  setUserInfo(soeId: any) {
    this.userDetails = soeId;
    this.userInfoChangeObserver$.next(soeId);
  }

  getUserInfo() {
    return this.userInfoChangeObserver$.asObservable();
  }

  get isUserLoggedIn(): boolean {
    return !!this.userDetails;
  }
}
