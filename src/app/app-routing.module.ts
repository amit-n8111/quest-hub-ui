import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'posts',
    loadChildren: './features/posts/posts.module#PostsModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'profiles',
    loadChildren: './features/profiles/profiles.module#ProfilesModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: './features/home/home.module#HomeModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
