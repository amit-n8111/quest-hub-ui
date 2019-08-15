import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  selectedTemplateName: string = 'taskOverviewTemplate';

  taskForm: FormGroup = this.fb.group({
    taskName: [''],
    taskTopic: [''],
    taskDescription: [''],
    taskType: [''],
    taskDueDate: [''],
    taskCreateDate: [''],
    taskCreatedBy: [''],
    screeningQuestions: this.fb.array([
    ]),
    taskSkills: [[]]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  openSection(sectionName) {
    this.selectedTemplateName = sectionName;
  }

  submitForm() {
    console.log(this.taskForm.value);
  }

}
