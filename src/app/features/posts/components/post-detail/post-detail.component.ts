import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PostsService } from './../../services/posts.service';
import { GrowlService } from './../../../../core/services/growl.service';
import { LoaderService } from './../../../../core/services/loader.service';
import { RefDataService } from './../../../../core/services/ref-data.service';
import { HelperService } from './../../../../core/services/helper.service';
import { EntitlementService } from './../../../../core/services/entitlement.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  @Output() showScreeningPopup: EventEmitter<boolean> = new EventEmitter();

  @Input() refData;
  @Input() taskDetails;
  @Input() isMyTask: boolean = false;

  isSidebar: boolean = true;

  columns = [
    { field: 'soeId', header: 'SOE ID' },
    { field: 'name', header: 'Applicants Name' },
    { field: 'score', header: 'Score' },
    { field: 'availableDates', header: 'Available Dates' }
  ];

  constructor(
    private entitlementService: EntitlementService,
    private router: Router,
    private helperService: HelperService,
    private refDataService: RefDataService,
    private activatedRoute: ActivatedRoute,
    private growlService: GrowlService,
    private loaderService: LoaderService,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.getRefData();

    this.activatedRoute.params.subscribe(params => {
      if (params && +params.id) {
        this.isSidebar = false;
        this.getTaskDetails(+params.id);
      }
    });
  }

  get loggedInUser() { return this.entitlementService.userDetailsSoeId; }

  openPostDetails(taskId) {
    const url = this.helperService.getResourceURL('posts/') + taskId;
    window.open(url);
  }

  applyToTask() {
    this.showScreeningPopup.emit(this.taskDetails);
  }

  markAsFavorite() {
    const taskId = this.taskDetails.taskId;
    this.loaderService.setLoader(true);

    this.postsService.markTaskAsFavorite(taskId).subscribe(
      (isSuccess) => {
        if (isSuccess === true) {
          this.loaderService.setLoader(false);
          this.growlService.showMessage('Task Marked As Favorite!');
        } else {
          this.loaderService.setLoader(false);
        }
      }
    );
  }

  getItemNameById(typeId, entityDataId) {
    let entityObj = this.refData[entityDataId].find((entity) => {
      return entity.id === typeId;
    });

    if (!entityObj) {
      return '';
    }

    return (entityDataId == 'topic') ? entityObj['topicName'] : entityObj['name'];
  }

  getTaskDetails(taskId) {
    this.loaderService.setLoader(true);

    this.postsService.getTaskDetailsByTaskId(taskId).subscribe(
      (data) => {
        this.taskDetails = data;
        this.loaderService.setLoader(false);
      }
    );
  }

  getRefData() {
    this.refDataService.getRefData().subscribe(
      (data) => {
        this.refData = data;
      }
    );
  }

  editTask(taskId) {
    this.router.navigate([`posts/edit/${taskId}`]);
  }
}
