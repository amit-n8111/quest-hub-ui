import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  isSidebar: boolean = true;

  selectedTemplateId: string = 'profileTemplate';

  constructor(
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      if (params && params.id) {
        this.isSidebar = false;
      }
    });
  }

  openProfileDetails() {
    window.open('http://localhost:4200/profiles/3');
  }

  openProfileSection(sectionName) {
    this.selectedTemplateId = sectionName;
  }
}
