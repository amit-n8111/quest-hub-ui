import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post-screening',
  templateUrl: './post-screening.component.html',
  styleUrls: ['./post-screening.component.scss']
})
export class PostScreeningComponent implements OnInit {
  @Input() taskForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  selectTaskTypeFn(taskTypeId) {
  }

  addQuestionFn() {
    (this.taskForm.get('screeningQuestions') as FormArray).push(this.createScreeningQuestion());
  }

  createScreeningQuestion(): FormGroup {
    return this.fb.group({
      id: [-1],
      question: ['']
    });
  }

  public onAdding(tag) {
    tag.id = -1;
  }

  removeQuestion(index) {
    (this.taskForm.get('screeningQuestions') as FormArray).removeAt(index);
  }

}
