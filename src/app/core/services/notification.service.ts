import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { HelperService } from './helper.service';

import { CoreConstants } from '../constants/core.constants';

@Injectable()
export class NotificationService {
    constructor(
        private http: HttpClient,
        private helperService: HelperService
    ) { }

    getNotifications() {
        const resourceUrl = this.helperService.getResourceURL(CoreConstants.NOTIFICATIONS);

        return this.http.get(resourceUrl).pipe(
            catchError(this.helperService.handleError<any>('getNotifications', {}))
        );
    }

    getAllNotifications() {
        const resourceUrl = this.helperService.getResourceURL(CoreConstants.ALL_NOTIFICATIONS);

        return this.http.get(resourceUrl).pipe(
            catchError(this.helperService.handleError<any>('getAllNotifications', {}))
        );
    }

}
