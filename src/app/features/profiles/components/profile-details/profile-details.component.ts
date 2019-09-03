import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProfileService } from './../../services/profile.service';
import { HelperService } from './../../../../core/services/helper.service';
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
    private helperService: HelperService,
    private loaderService: LoaderService,
    private profileService: ProfileService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.isSidebar = false;
        this.getUserDetailsBySOEId(params.id);
      }
    });
  }

  openProfileDetails() {
    const url = this.helperService.getResourceURL('profiles/') + `${this.userDetails.soeId}`;
    window.open(url);
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
