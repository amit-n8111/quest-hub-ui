import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfileListComponent } from './components/profile-list/profile-list.component';


@NgModule({
  declarations: [ProfileListComponent],
  imports: [
    CommonModule,
    ProfilesRoutingModule
  ]
})

export class ProfilesModule { }
