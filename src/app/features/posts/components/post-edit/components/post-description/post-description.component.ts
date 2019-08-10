import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-description',
  templateUrl: './post-description.component.html',
  styleUrls: ['./post-description.component.scss']
})
export class PostDescriptionComponent implements OnInit {
  taskDescription: string = '';

  constructor() { }

  ngOnInit() {
  }

}
