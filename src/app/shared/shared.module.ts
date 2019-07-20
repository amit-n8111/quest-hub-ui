import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from './primeng.module';

@NgModule({
    declarations: [],
    imports: [
        PrimengModule,
        CommonModule
    ],
    exports: [
        PrimengModule,
        CommonModule
    ]
})

export class SharedModule { }
