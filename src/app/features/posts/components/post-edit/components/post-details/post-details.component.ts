import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})

export class PostDetailsComponent implements OnInit {
  selectedTaskTypeId: number;
  selectedRewardTypeId: number;

  @Input() refData;
  @Input() taskForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.selectedTaskTypeId = this.taskForm.get('taskTypeId').value;
    this.selectedRewardTypeId = this.taskForm.get('rewardTypeId').value;
  }

  selectTaskTypeFn(taskTypeId) {
    this.selectedTaskTypeId = taskTypeId;
    this.taskForm.get('taskTypeId').setValue(taskTypeId);
  }

  selectRewardTypeFn(rewardTypeId) {
    this.selectedRewardTypeId = rewardTypeId;
    this.taskForm.get('rewardTypeId').setValue(rewardTypeId);
  }

  onSelectSkill(event) {
  }

}
