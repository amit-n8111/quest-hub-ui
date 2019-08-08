import { NgModule } from '@angular/core';
import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { PostEditComponent } from './components/post-edit/post-edit.component';
import { MyPostListComponent } from './components/my-post-list/my-post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

import { PostsService } from './services/posts.service';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostOverviewCardComponent } from './components/post-overview-card/post-overview-card.component';

@NgModule({
  declarations: [
    PostEditComponent,
    MyPostListComponent,
    PostDetailComponent,
    PostListComponent,
    PostOverviewCardComponent
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
