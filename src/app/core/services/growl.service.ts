import { Injectable } from '@angular/core';

import { MessageService } from 'primeng/components/common/messageservice';

@Injectable()
export class GrowlService {
    constructor(
        private messageService: MessageService
    ) { }

    private addMessage({ severity = 'info', summary = '', detail = '' }) {
        this.clear();
        this.messageService.add({
            severity,
            summary,
            detail
        });
    }

    clear() {
        this.messageService.clear();
    }

    showMessage(msg: string, isError = false) {
        let severity = 'success';
        let summary = 'Success!';

        if (isError) {
            severity = 'error';
            summary = 'Error ';
        }

        this.addMessage({
            severity,
            summary,
            detail: msg
        });
    }

    showInfoMessage(msg) {
        const severity = 'info';
        const summary = 'Info! ';

        this.addMessage({
            severity,
            summary,
            detail: msg
        });
    }

}
