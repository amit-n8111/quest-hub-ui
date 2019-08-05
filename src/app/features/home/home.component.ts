import { Component, OnInit } from '@angular/core';

import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  searchString: string;
  topicList: string[];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
  }

  searchTopics(event) {
    this.homeService.getTopicList().subscribe((topicList) => {
      this.topicList = this.filterTopics(this.searchString, topicList['data']);
    });
  }

  // Todo:: Remove this function when service is ready.

  filterTopics(query, topicList: any[]): any[] {
    const filtered: any[] = [];

    topicList.forEach(topic => {
      if (topic.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(topic);
      }
    });

    return filtered;
  }

  onTopicSelect(value) {
    console.log(value);
  }

}
