import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';


@NgModule({
  declarations: [
    ProfileListComponent,
    ProfileDetailsComponent
  ],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    SharedModule
  ]
})

export class ProfilesModule { }
