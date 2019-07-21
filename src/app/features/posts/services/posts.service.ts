import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { HelperService } from './../../../core/services/helper.service';

import { PostsConstants } from '../constants/posts.constants';

export class PostsService {
    constructor(
        private http: HttpClient,
        private helperService: HelperService
    ) { }

    getPostList() {
        const resourceURL = this.helperService.getResourceURL(PostsConstants.POST_LIST);

        return this.http.get(resourceURL).pipe(
            catchError(this.helperService.handleError<any>('getPostList', []))
        );
    }

    getPostDetailsByPostId(postId) {
        const resourceUrl = this.helperService.getResourceURL(PostsConstants.POST_DESCRIPTION);

        // reourceUrl = resourceUrl + postId;

        return this.http.get(resourceUrl).pipe(
            catchError(this.helperService.handleError<any>('getPostDetail', {}))
        );
    }
}
