import { NgModule } from '@angular/core';
import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { PostEditComponent } from './components/post-edit/post-edit.component';
import { MyPostListComponent } from './components/my-post-list/my-post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

import { PostsService } from './services/posts.service';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostOverviewCardComponent } from './components/post-overview-card/post-overview-card.component';
import { PostEditMenuComponent } from './components/post-edit/components/post-edit-menu/post-edit-menu.component';
import { PostOverviewComponent } from './components/post-edit/components/post-overview/post-overview.component';
import { PostDescriptionComponent } from './components/post-edit/components/post-description/post-description.component';
import { PostScreeningComponent } from './components/post-edit/components/post-screening/post-screening.component';
import { PostSkillsetsComponent } from './components/post-edit/components/post-skillsets/post-skillsets.component';
import { PostReviewComponent } from './components/post-edit/components/post-review/post-review.component';

@NgModule({
  declarations: [
    PostEditComponent,
    MyPostListComponent,
    PostDetailComponent,
    PostListComponent,
    PostOverviewCardComponent,
    PostEditMenuComponent,
    PostOverviewComponent,
    PostDescriptionComponent,
    PostScreeningComponent,
    PostSkillsetsComponent,
    PostReviewComponent
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
