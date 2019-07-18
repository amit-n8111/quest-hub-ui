import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';

import { HelperService } from './helper.service';
import { CoreConstants } from '../core.constants';
import { Observable, of } from 'rxjs';

@Injectable()
export class EntitlementService {

  constructor(
    private helperService: HelperService,
    private http: HttpClient
  ) { }

  getUserInformation(): Observable<boolean> {
    const resourceURL = this.helperService.getResourceURL(CoreConstants.USERS);

    // Service call will go here.
    // return this.http.get(resourceURL).pipe(
    //   catchError(this.helperService.handleError<any>('getUserInformation', []))
    // );

    return of(false);
  }
}
