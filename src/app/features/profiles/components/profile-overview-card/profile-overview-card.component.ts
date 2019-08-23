import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-overview-card',
  templateUrl: './profile-overview-card.component.html',
  styleUrls: ['./profile-overview-card.component.scss']
})
export class ProfileOverviewCardComponent implements OnInit {
  @Input() userDetails;
  displaySidebar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
