import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { HelperService } from './../../core/services/helper.service';

export class InboxService {
    constructor(
        private http: HttpClient,
        private helperService: HelperService
    ) { }

    approveUser(taskId, assignedTo) {
        const resourceURL = this.helperService.getResourceURL('tasks/approve/') + taskId;

        return this.http.post(resourceURL, assignedTo).pipe(
            tap(data => console.log(data)),
            catchError(this.helperService.handleError<any>('getTaskList', {}))
        );
    }
}
