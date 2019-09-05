import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PostsService } from './../../services/posts.service';
import { GrowlService } from './../../../../core/services/growl.service';
import { LoaderService } from './../../../../core/services/loader.service';
import { RefDataService } from './../../../../core/services/ref-data.service';
import { EntitlementService } from './../../../../core/services/entitlement.service';

@Component({
  selector: 'app-my-post-list',
  templateUrl: './my-post-list.component.html',
  styleUrls: ['./my-post-list.component.scss']
})

export class MyPostListComponent implements OnInit {
  refData;
  taskList: Array<Object> = [];

  displaySidebar: boolean = false;
  selectedTaskDetails: Object = {};

  constructor(
    private entitlementService: EntitlementService,
    private refDataService: RefDataService,
    private growlService: GrowlService,
    private postService: PostsService,
    private loaderService: LoaderService,
  ) { }

  ngOnInit() {
    this.getRefData();
    this.getTaskList();
  }

  getRefData() {
    this.refDataService.getRefData().subscribe(
      (data) => {
        this.refData = data;
      }
    );
  }

  getTaskList() {
    this.loaderService.setLoader(true);

    this.postService.getMyTaskList(this.entitlementService.userDetailsSoeId).subscribe(
      (data) => {
        this.loaderService.setLoader(false);
        this.taskList = data;
      }
    );
  }

  showSidebarFn(selectedTask) {
    this.selectedTaskDetails = selectedTask;
    this.displaySidebar = true;
  }

}
