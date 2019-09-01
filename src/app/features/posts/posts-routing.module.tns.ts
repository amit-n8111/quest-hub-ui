import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostsPageComponent } from './components/posts-page-tns/posts-page-tns.component.tns';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: PostsPageComponent
            },
            {
                path: ':id',
                component: PostDetailComponent
            },
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class PostsRoutingModule {
    constructor() {
    }
}
