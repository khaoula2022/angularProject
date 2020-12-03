import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
constructor()
{

}
  ngOnInit() {
  }

  customOptions: OwlOptions = {
    loop: false, mouseDrag: true, touchDrag: true,pullDrag: true,dots: true,
    navSpeed: 700,
    navText: ['het', ''],
    responsive: {
      0: {
        items: 1
      },
      50: {
        items: 1
      },
      70: {
        items: 1
      },
      50: { items: 1}},nav: true
  }
}
