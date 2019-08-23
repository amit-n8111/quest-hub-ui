import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ProfileOverviewCardComponent } from './components/profile-overview-card/profile-overview-card.component';

import { ProfileService } from './services/profile.service';

@NgModule({
  declarations: [
    ProfileListComponent,
    ProfileDetailsComponent,
    ProfileOverviewCardComponent
  ],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    SharedModule
  ],
  providers: [
    ProfileService
  ]
})

export class ProfilesModule { }
