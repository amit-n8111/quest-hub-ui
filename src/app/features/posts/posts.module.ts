import { NgModule } from '@angular/core';
import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { PostEditComponent } from './components/post-edit/post-edit.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [
    PostEditComponent,
    PostListComponent,
    PostDetailComponent
  ],
  imports: [
    PostsRoutingModule,
    SharedModule
  ],
  providers: [
    PostsService
  ]
})

export class PostsModule { }
