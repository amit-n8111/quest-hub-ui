import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-overview-card',
  templateUrl: './post-overview-card.component.html',
  styleUrls: ['./post-overview-card.component.scss']
})
export class PostOverviewCardComponent implements OnInit {
  @Output() emitClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cardClick() {
    this.emitClick.emit('abc');
  }

}
