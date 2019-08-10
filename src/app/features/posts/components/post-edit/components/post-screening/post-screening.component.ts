import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-screening',
  templateUrl: './post-screening.component.html',
  styleUrls: ['./post-screening.component.scss']
})
export class PostScreeningComponent implements OnInit {
  selectedTaskType: string = '';

  // Todo:: rectify this logic.
  questionCounter: number = 0;
  questionArray: Array<number> = [];


  constructor() { }

  ngOnInit() {
  }

  selectTaskTypeFn(taskType) {
    this.selectedTaskType = taskType;
  }

  addQuestionFn() {
    this.questionCounter++;
    this.questionArray.push(this.questionCounter);
  }

}
