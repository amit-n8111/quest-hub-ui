import { NgModule } from '@angular/core';

import { ChipsModule } from 'primeng/chips';
import { TableModule } from 'primeng/table';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CarouselModule } from 'primeng/carousel';

import { EditorModule } from 'primeng/editor';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
    declarations: [],
    imports: [
        TableModule,
        ChipsModule,
        RadioButtonModule,
        SidebarModule,
        AutoCompleteModule,
        CarouselModule,
        EditorModule,
        CardModule,
        DialogModule,
        CalendarModule,
        InputTextModule,
        InputTextareaModule
    ],
    exports: [
        TableModule,
        ChipsModule,
        RadioButtonModule,
        SidebarModule,
        AutoCompleteModule,
        CarouselModule,
        EditorModule,
        CardModule,
        DialogModule,
        CalendarModule,
        InputTextModule,
        InputTextareaModule
    ]
})

export class PrimengModule { }
