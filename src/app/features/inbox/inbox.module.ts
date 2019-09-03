import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { InboxRoutingModule } from './inbox-routing.module';

import { InboxComponent } from './inbox.component';

import { InboxService } from './inbox.service';

@NgModule({
    declarations: [
        InboxComponent
    ],
    imports: [
        InboxRoutingModule,
        SharedModule
    ],
    providers: [
        InboxService
    ]
})

export class InboxModule { }
