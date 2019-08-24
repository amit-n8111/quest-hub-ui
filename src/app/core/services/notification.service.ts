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

    getNotifications(soeId) {
        const resourceUrl = this.helperService.getResourceURL(CoreConstants.NOTIFICATIONS);

        const options = { params: { soeId } };

        return this.http.get(resourceUrl, options).pipe(
            catchError(this.helperService.handleError<any>('getNotifications', {}))
        );
    }

}
