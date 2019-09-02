import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';

import { HelperService } from './helper.service';

import { CoreConstants } from './../constants/core.constants';

@Injectable()
export class RefDataService {
    refData: Object;

    private refDataObservable;

    constructor(
        private helperService: HelperService,
        private http: HttpClient
    ) { }

    getRefData() {
        if (this.refData) {
            return of(this.refData);
        } else if (this.refDataObservable) {
            return this.refDataObservable;
        } else {
            const resourceUrl = this.helperService.getResourceURL(CoreConstants.REF_DATA);

            this.refDataObservable = this.http.get(resourceUrl).pipe(
                tap(data => { data['taskTemplates'] = this.getTaskTemplate(); this.refData = data; }),
                catchError(this.helperService.handleError<any>('getPostDetail', {}))
            );

            return this.refDataObservable;
        }
    }

    getTaskTemplate() {
        return [
            {
                templateName: 'Web Development',
                backendSkills: null,
                id: -1,
                manHoursNeeded: null,
                otherSkills: null,
                rewardTypeId: null,
                rewardTypeName: null,
                screeningQuestions: [],
                skills: [],
                taskCreateDate: null,
                taskCreatedBy: '',
                taskDescription: `<p>About us:</p><p>{Description of your company and target audience}</p><p><br></p><p>What we're looking
                 for:</p>
                <p>An experienced full stack developer to help kick-start/build on {description of website or platform}.
                We need someone to work on {specific project requirements}. The project is based on
                {software platforms, frameworks, languages, databases used by your company}.</p><p><br></p><p>We need the
                following deliverables:</p><p>&nbsp;- Deliverable #1 by {date}</p><p>&nbsp;- Deliverable #2 by {date}</p><p>&nbsp;- ...
                </p><p><br></p><p>To complete all the deliverables, the right developer will have experience in the following:</p><p>&nbsp;-
                Experience translating designer mock-ups and wireframes into front-end code</p><p>&nbsp;-
                {Software platforms, frameworks, languages, databases, unit tests, version control, APIs}</p><p><br></p><p>In your proposal,
                please share a brief summary of your experience and tell us about a recent full stack web development project
                 you worked on.</p>`,
                taskDueDate: null,
                taskId: -1,
                taskName: 'Full stack web developer for {type of app or your company name}',
                taskStatusId: null,
                taskStatusName: null,
                taskTopicId: 1,
                taskTopicName: null,
                taskTypeId: null,
                taskTypeName: null,
                uiUxSkills: null
            }
        ];
    }
}
