import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostEditComponent } from './components/post-edit/post-edit.component';
import { MyPostListComponent } from './components/my-post-list/my-post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PostListComponent,
      },
      {
        path: 'myPosts',
        component: MyPostListComponent,
      },
      {
        path: ':id',
        component: PostDetailComponent
      },
      {
        path: 'edit/:id',
        component: PostEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostsRoutingModule { }
