import { Component, OnInit } from '@angular/core';

interface CarouselItems {
  itemName: string;
}

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss']
})

export class HomeCarouselComponent implements OnInit {
  carouselItems: Array<CarouselItems> = [
    { itemName: 'carousel1.jpg' },
    { itemName: 'carousel2.jpg' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
