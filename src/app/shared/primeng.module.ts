import { NgModule } from '@angular/core';

import { ChipsModule } from 'primeng/chips';
import { TableModule } from 'primeng/table';
import { RadioButtonModule } from 'primeng/radiobutton';


@NgModule({
    declarations: [],
    imports: [
        TableModule,
        ChipsModule,
        RadioButtonModule
    ],
    exports: [
        TableModule,
        ChipsModule,
        RadioButtonModule
    ]
})

export class PrimengModule { }
