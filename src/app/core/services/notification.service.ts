import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
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
            // tap(data => {
            //     this.getOtherUserInfo(data);
            // }),
            catchError(this.helperService.handleError<any>('getAllNotifications', {}))
        );
    }

    getOtherUserInfo(data) {
        data[0]['otherUserInfo'] = [
            {
                soeId: 'nk68096',
                name: 'Naresh Kumar',
                score: '80%',
                rating: 2
            },
            {
                soeId: 'gg38883',
                name: 'Girish Grandhi',
                score: '50%',
                rating: 1
            },
            {
                soeId: 'mc71542',
                name: 'Mayur Chauhan',
                score: '100%',
                rating: 1
            }
        ];
    }

}
