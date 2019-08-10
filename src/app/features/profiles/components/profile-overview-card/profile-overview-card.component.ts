import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-overview-card',
  templateUrl: './profile-overview-card.component.html',
  styleUrls: ['./profile-overview-card.component.scss']
})
export class ProfileOverviewCardComponent implements OnInit {
  displaySidebar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
