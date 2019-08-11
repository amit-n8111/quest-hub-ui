import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InboxComponent } from './inbox.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: InboxComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class InboxRoutingModule { }
