import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-skillsets',
  templateUrl: './post-skillsets.component.html',
  styleUrls: ['./post-skillsets.component.scss']
})
export class PostSkillsetsComponent implements OnInit {

  selectedSkills: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  onSelectSkill(event) {
  }

}
