import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  displaySidebar: boolean = false;
  isShowFilters: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
