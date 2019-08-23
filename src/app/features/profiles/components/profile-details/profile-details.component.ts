import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProfileService } from './../../services/profile.service';
import { LoaderService } from './../../../../core/services/loader.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  @Input() userDetails;

  isSidebar: boolean = true;

  selectedTemplateId: string = 'profileTemplate';

  constructor(
    private loaderService: LoaderService,
    private profileService: ProfileService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      if (params && params.id) {
        this.isSidebar = false;
        this.getUserDetailsBySOEId(params.id);
      }
    });
  }

  openProfileDetails() {
    window.open('http://localhost:4200/profiles/' + `${this.userDetails.soeId}`);
  }

  openProfileSection(sectionName) {
    this.selectedTemplateId = sectionName;
  }

  getArray(rating) {
    return new Array(rating);
  }

  getUserDetailsBySOEId(soeId) {
    this.loaderService.setLoader(true);

    this.profileService.getProfileDetails(soeId).subscribe(
      (data) => {
        this.userDetails = data;
        this.loaderService.setLoader(false);
      }
    );
  }
}
