import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

import { TASK_SECTION } from './constants/post.constants';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  selectedTemplateId: number = TASK_SECTION.TASK_OVERVIEW;

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

  get TASK_SECTION() { return TASK_SECTION; }

  ngOnInit() {
  }

  openSection(sectionId) {
    this.selectedTemplateId = sectionId;
  }

  submitForm() {
    console.log(this.taskForm.value);
  }

  nextSection() {
    this.selectedTemplateId++;
  }

  previousSection() {
    this.selectedTemplateId--;
  }

}
