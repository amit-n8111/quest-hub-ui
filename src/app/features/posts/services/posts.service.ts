import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { HelperService } from './../../../core/services/helper.service';

import { PostsConstants } from '../constants/posts.constants';

export class PostsService {
    constructor(
        private http: HttpClient,
        private helperService: HelperService
    ) { }

    getTaskList() {
        const resourceURL = this.helperService.getResourceURL(PostsConstants.TASK_LIST);

        return this.http.get(resourceURL).pipe(
            catchError(this.helperService.handleError<any>('getPostList', []))
        );
    }

    getTaskDetailsByTaskId(taskId) {
        // Todo: Change this to resourceURL.
        const resourceUrl = this.helperService.getAssetsURL(PostsConstants.TASK_DETAILS);
        // + `${taskId}`;

        return this.http.get(resourceUrl).pipe(
            catchError(this.helperService.handleError<any>('getPostDetail', {}))
        );
    }

    submitTask(taskId, taskForm) {
        const resourceUrl = this.helperService.getResourceURL(PostsConstants.TASK_POST) + `${taskId}`;

        return this.http.post(resourceUrl, taskForm).pipe(
            catchError(this.helperService.handleError<any>('getPostDetail', {}))
        );
    }

    submitTaskApplication(taskId, applicationForm) {
        const resourceUrl = this.helperService.getResourceURL(PostsConstants.TASK_SUBMIT_APPLICATION) + `${taskId}`;

        return this.http.post(resourceUrl, applicationForm).pipe(
            catchError(this.helperService.handleError<any>('getPostDetail', {}))
        );
    }
}
