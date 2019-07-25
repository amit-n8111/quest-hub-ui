import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProfileListComponent,
      },
      {
        path: ':id',
        component: ProfileDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfilesRoutingModule { }
