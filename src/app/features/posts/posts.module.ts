import { NgModule } from '@angular/core';
import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { PostEditComponent } from './components/post-edit/post-edit.component';
import { PostListComponent } from './components/post-list/post-list.component';

@NgModule({
  declarations: [
    PostEditComponent,
    PostListComponent
  ],
  imports: [
    PostsRoutingModule,
    SharedModule
  ]
})

export class PostsModule { }
