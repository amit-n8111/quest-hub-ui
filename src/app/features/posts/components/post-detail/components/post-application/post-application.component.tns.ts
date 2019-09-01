import { Component, OnInit } from '@angular/core';

import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import { alert } from 'tns-core-modules/ui/dialogs';

@Component({
    selector: 'app-post-application',
    templateUrl: './post-application.component.html'
})

export class PostApplicationComponent implements OnInit {
    taskDetails;

    constructor(
        private params: ModalDialogParams
    ) {
    }

    ngOnInit() {
        this.taskDetails = this.params['context']['taskDetails'];
    }

    close() {
        this.params.closeCallback();
    }

    submitForm() {
        console.log('------------------- Form Submitted --------------------');

        alert({
            title: 'Success!',
            message: `You have successfully applied to the task ${this.taskDetails['taskName']}`,
            okButtonText: 'Ok'
        }).then(() => {
            console.log('Alert shown successfully....');
        });
    }

}
