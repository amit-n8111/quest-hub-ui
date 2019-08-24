import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';

import { HelperService } from './helper.service';

import { CoreConstants } from './../constants/core.constants';

@Injectable()
export class RefDataService {
    refData: Object;

    private refDataObservable;

    constructor(
        private helperService: HelperService,
        private http: HttpClient
    ) { }

    getRefData() {
        if (this.refData) {
            return of(this.refData);
        } else if (this.refDataObservable) {
            return this.refDataObservable;
        } else {
            const resourceUrl = this.helperService.getResourceURL(CoreConstants.REF_DATA);

            this.refDataObservable = this.http.get(resourceUrl).pipe(
                tap(data => { this.refData = data; }),
                catchError(this.helperService.handleError<any>('getPostDetail', {}))
            );

            return this.refDataObservable;
        }
    }
}
