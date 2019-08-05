import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { HelperService } from './../../../core/services/helper.service';

import { HomeConstants } from '../constants/home.constants';

export class HomeService {
    constructor(
        private http: HttpClient,
        private helperService: HelperService
    ) { }

    getTopicList() {
        const resourceURL = this.helperService.getResourceURL(HomeConstants.TOPIC_LIST);

        return this.http.get(resourceURL).pipe(
            catchError(this.helperService.handleError<any>('getTopicList', []))
        );
    }
}
