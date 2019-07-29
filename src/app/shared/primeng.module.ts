import { NgModule } from '@angular/core';

import { ChipsModule } from 'primeng/chips';
import { TableModule } from 'primeng/table';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';


@NgModule({
    declarations: [],
    imports: [
        TableModule,
        ChipsModule,
        RadioButtonModule,
        SidebarModule
    ],
    exports: [
        TableModule,
        ChipsModule,
        RadioButtonModule,
        SidebarModule
    ]
})

export class PrimengModule { }
