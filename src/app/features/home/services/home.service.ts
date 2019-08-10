import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { HelperService } from './../../../core/services/helper.service';

import { HomeConstants } from '../constants/home.constants';

export class HomeService {
    constructor(
        private http: HttpClient,
        private helperService: HelperService
    ) { }

    getTopicList(topicName) {
        const resourceURL = this.helperService.getResourceURL(HomeConstants.TOPIC_LIST);
        const options = { params: { topicName } };

        return this.http.get(resourceURL, options).pipe(
            catchError(this.helperService.handleError<any>('getTopicList', []))
        );
    }
}
