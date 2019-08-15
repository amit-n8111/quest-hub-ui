import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { environment } from './../../../environments/environment';

@Injectable()
export class HelperService {

  constructor() { }

  public getResourceURL(resourceUrl: string): string {
    return `${environment.BASE_URL}${resourceUrl}`;
  }

  public getAssetsURL(resourceUrl: string): string {
    return `${environment.ASSETS_URL}${resourceUrl}`;
  }

  public handleError<T>(operation = 'operation', result?: T) {
    return (err: HttpErrorResponse): Observable<T> => {
      return of(result);
    };
  }

}
