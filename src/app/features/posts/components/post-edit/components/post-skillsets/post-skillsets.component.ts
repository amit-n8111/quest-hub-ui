import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-skillsets',
  templateUrl: './post-skillsets.component.html',
  styleUrls: ['./post-skillsets.component.scss']
})

export class PostSkillsetsComponent implements OnInit {
  @Input() taskForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  onSelectSkill(event) {
  }

  public onAdding(tag) {
    tag.id = -1;
  }
}
