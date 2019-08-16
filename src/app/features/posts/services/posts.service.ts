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
        const requestJson = {
            'createdBy': '',
            'pageNumber': 1,
            'pageSize': 10,
            'search': '',
            'skillId': '',
            'sortBy': '',
            'sortOrder': '',
            'tasktopicId': 0,
            'tasktypeId': 0
        };
        const resourceURL = this.helperService.getResourceURL(PostsConstants.TASK_LIST);

        return this.http.post(resourceURL, requestJson).pipe(
            catchError(this.helperService.handleError<any>('getPostList', []))
        );
    }

    getTaskDetailsByTaskId(taskId) {
        const resourceUrl = this.helperService.getResourceURL(PostsConstants.TASK_DETAILS) + `${taskId}`;

        return this.http.get(resourceUrl).pipe(
            catchError(this.helperService.handleError<any>('getPostDetail', {}))
        );
    }

    submitTask(taskForm) {
        const resourceUrl = this.helperService.getResourceURL(PostsConstants.TASK_POST);

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
