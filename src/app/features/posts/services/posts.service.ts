import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

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
            'taskTopicId': 0,
            'taskTypeId': 0,
            'taskStatusId': 0
        };
        // const resourceURL = this.helperService.getResourceURL(PostsConstants.TASK_LIST);

        // return this.http.post(resourceURL, requestJson).pipe(
        //     tap(data => console.log(data)),
        //     catchError(this.helperService.handleError<any>('getTaskList', []))
        // );

        const resourceURL = this.helperService.getAssetsURL('assets/json/task-list.json');

        return this.http.get(resourceURL).pipe(
            catchError(this.helperService.handleError<any>('getTopicList', []))
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
            catchError(this.helperService.handleError<any>('submitTask', {}))
        );
    }

    submitTaskApplication(taskId, applicationForm) {
        const resourceUrl = this.helperService.getResourceURL(PostsConstants.TASK_SUBMIT_APPLICATION) + `${taskId}`;

        return this.http.post(resourceUrl, applicationForm).pipe(
            catchError(this.helperService.handleError<any>('submitTaskApplication', ''))
        );
    }

    markTaskAsFavorite(taskId) {
        const resourceUrl = this.helperService.getResourceURL(PostsConstants.TASK_MARK_AS_FAVORITE) + `${taskId}`;

        return this.http.get(resourceUrl).pipe(
            catchError(this.helperService.handleError<any>('markTaskAsFavorite', {}))
        );
    }
}
