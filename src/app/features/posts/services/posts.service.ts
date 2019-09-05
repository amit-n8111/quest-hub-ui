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
            'taskTopicId': '',
            'taskTypeId': '',
            'taskStatusId': ''
        };
        const resourceURL = this.helperService.getResourceURL(PostsConstants.TASK_LIST);

        return this.http.post(resourceURL, requestJson).pipe(
            tap(data => {
                console.log(data);
                // this.getOtherUserInfo(data);
            }),
            catchError(this.helperService.handleError<any>('getTaskList', []))
        );
    }

    getMyTaskList(soeId) {
        const requestJson = {
            'createdBy': soeId,
            'pageNumber': 1,
            'pageSize': 10,
            'search': '',
            'skillId': '',
            'sortBy': '',
            'sortOrder': '',
            'taskTopicId': '',
            'taskTypeId': '',
            'taskStatusId': ''
        };
        const resourceURL = this.helperService.getResourceURL(PostsConstants.TASK_MY_LIST);

        return this.http.post(resourceURL, requestJson).pipe(
            tap(data => {
                console.log(data);
            }),
            catchError(this.helperService.handleError<any>('getTaskList', []))
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

    saveTask(taskForm) {
        const resourceUrl = this.helperService.getResourceURL(PostsConstants.TASK_SAVE);

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

    getTaskSuggestions(taskName) {
        const resourceURL = this.helperService.getResourceURL(PostsConstants.TASK_SUGGESTIONS);

        // return of([{ id: 1, taskName: 'web developer requiree' }]);

        return this.http.post(resourceURL, { taskName }).pipe(
            tap(data => console.log(data)),
            catchError(this.helperService.handleError<any>('getTaskList', {}))
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
