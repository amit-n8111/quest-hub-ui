import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PrimengModule } from './primeng.module';

import { DateAgoPipe } from './pipes/date-ago.pipe';

@NgModule({
    declarations: [
        DateAgoPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        PrimengModule,
        FormsModule,
        ReactiveFormsModule,
        DateAgoPipe
    ]
})

export class SharedModule { }
