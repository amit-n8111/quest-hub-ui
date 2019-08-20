import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { environment } from './../../../environments/environment';

import { GrowlService } from './growl.service';

@Injectable()
export class HelperService {

  constructor(private growlService: GrowlService) { }

  public getResourceURL(resourceUrl: string): string {
    return `${environment.BASE_URL}${resourceUrl}`;
  }

  public getAssetsURL(resourceUrl: string): string {
    return `${environment.ASSETS_URL}${resourceUrl}`;
  }

  public handleError<T>(operation = 'operation', result?: T) {
    return (err: HttpErrorResponse): Observable<T> => {

      if (err.error instanceof Error) {
        this.growlService.showMessage('Client-side error occured', true);
        console.log('Client-side error occured');
      } else {
        this.growlService.showMessage('Server-side error occured', true);
        console.log('Server-side error occured');
      }

      console.log(err);

      console.log(`${operation} failed: ${err.message}`);

      return of(result);
    };
  }

}
