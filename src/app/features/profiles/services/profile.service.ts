import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { HelperService } from './../../../core/services/helper.service';

import { ProfileConstants } from '../constants/profile.constants';

export class ProfileService {
    constructor(
        private http: HttpClient,
        private helperService: HelperService
    ) { }

    getProfileList() {
        const requestJson = {
            'pageNumber': 1,
            'pageSize': 10,
            'search': '',
            'skillId': '',
            'sortBy': '',
            'sortOrder': '',
            'taskTopicId': ''
        };

        const resourceURL = this.helperService.getResourceURL(ProfileConstants.PROFILE_LIST);

        return this.http.post(resourceURL, requestJson).pipe(
            catchError(this.helperService.handleError<any>('getPostList', []))
        );
    }

    getProfileDetails(soeId) {
        const resourceURL = this.helperService.getResourceURL(ProfileConstants.PROFILE_DETAILS);

        const options = { params: { soeId } };

        return this.http.get(resourceURL, options).pipe(
            catchError(this.helperService.handleError<any>('getProfileDetails', {}))
        );
    }
}
