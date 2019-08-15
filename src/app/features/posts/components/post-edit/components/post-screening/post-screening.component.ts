import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post-screening',
  templateUrl: './post-screening.component.html',
  styleUrls: ['./post-screening.component.scss']
})
export class PostScreeningComponent implements OnInit {
  selectedTaskType: string = '';

  @Input() taskForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.selectedTaskType = this.taskForm.get('taskType').value;
  }

  selectTaskTypeFn(taskType) {
    this.selectedTaskType = taskType;
    this.taskForm.get('taskType').setValue(taskType);
  }

  addQuestionFn() {
    (this.taskForm.get('screeningQuestions') as FormArray).push(this.createScreeningQuestion());
  }

  createScreeningQuestion(): FormGroup {
    return this.fb.group({
      questionId: ['0'],
      questionName: ['']
    });
  }

}
