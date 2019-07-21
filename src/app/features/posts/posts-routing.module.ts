import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostEditComponent } from './components/post-edit/post-edit.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PostListComponent,
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
