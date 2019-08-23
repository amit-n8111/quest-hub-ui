import { Component, OnInit } from '@angular/core';

import { ProfileService } from './../../services/profile.service';
import { LoaderService } from './../../../../core/services/loader.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  userList: Array<Object> = [];

  constructor(
    private loaderService: LoaderService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.loaderService.setLoader(true);

    this.profileService.getProfileList().subscribe(
      (data) => {
        this.userList = data;
        this.loaderService.setLoader(false);
      }
    );
  }

}
