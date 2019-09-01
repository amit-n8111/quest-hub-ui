import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { PostApplicationComponent } from './components/post-detail/components/post-application/post-application.component.tns';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostsPageComponent } from './components/posts-page-tns/posts-page-tns.component.tns';
import { PostsRoutingModule } from './posts-routing.module.tns';

import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PostsService } from './services/posts.service';
import { ModalDialogService } from 'nativescript-angular/modal-dialog';

import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { NativeScriptUICalendarModule } from 'nativescript-ui-calendar/angular';
import { NativeScriptUIChartModule } from 'nativescript-ui-chart/angular';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';
import { NativeScriptUIAutoCompleteTextViewModule } from 'nativescript-ui-autocomplete/angular';
import { NativeScriptUIGaugeModule } from 'nativescript-ui-gauge/angular';

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptRouterModule,
        PostsRoutingModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
        NativeScriptCommonModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptUICalendarModule,
        NativeScriptUIChartModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIAutoCompleteTextViewModule,
        NativeScriptUIGaugeModule
    ],
    declarations: [
        PostsPageComponent,
        PostListComponent,
        PostDetailComponent,
        PostApplicationComponent
    ],
    entryComponents: [
        PostApplicationComponent
    ],
    providers: [PostsService, ModalDialogService]
})

export class PostsModule {
    constructor() {
    }
}
