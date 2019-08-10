import { NgModule } from '@angular/core';

import { ChipsModule } from 'primeng/chips';
import { TableModule } from 'primeng/table';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CarouselModule } from 'primeng/carousel';

import { EditorModule } from 'primeng/editor';
import { CardModule } from 'primeng/card';

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
        CardModule
    ],
    exports: [
        TableModule,
        ChipsModule,
        RadioButtonModule,
        SidebarModule,
        AutoCompleteModule,
        CarouselModule,
        EditorModule,
        CardModule
    ]
})

export class PrimengModule { }
