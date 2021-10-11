import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  images = [
    { path: 'assets/img/energy.jpg ', title: 'Energy Managment' },
    { path: 'assets/img/employeemg.png', title: 'Employee Managment' },
    { path: 'assets/img/injurimg.png', title: 'Injury management' },
    { path: 'assets/img/riske.jpg', title: 'Risk Managment' },
    { path: 'assets/img/employeemg.png', title: 'Employee Managment' },
    { path: 'assets/img/injurimg.png', title: 'Injury management' },
    { path: 'assets/img/energy.jpg', title: 'Energy Managment' },
  ];
  image2 = [
    {
      path: 'assets/img/client1.jpg',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum laudantium repellat facere placeat eius optio doloremque consequatur exercitationem velit nobis earum fugit, enim voluptatem fuga quis ducimus ex est minus?',
      name: 'Ximena Vegara',
    },
    {
      path: 'assets/img/client2.jpg',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum laudantium repellat facere placeat eius optio doloremque consequatur exercitationem velit nobis earum fugit, enim voluptatem fuga quis ducimus ex est minus?',
      name: 'John Paul',
    },
    {
      path: 'assets/img/client3.jpg',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum laudantium repellat facere placeat eius optio doloremque consequatur exercitationem velit nobis earum fugit, enim voluptatem fuga quis ducimus ex est minus?',
      name: 'Marielle Haag',
    },
    {
      path: 'assets/img/client4.jpg',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum laudantium repellat facere placeat eius optio doloremque consequatur exercitationem velit nobis earum fugit, enim voluptatem fuga quis ducimus ex est minus?',
      name: 'Marielle Haag',
    },
  ];

  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
  slideConfig2 = { slidesToShow: 3, slidesToScroll: 3 };
  slides: any = [];
  constructor() {}
  // ngOnInit() :void{}
  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
  ngOnInit(): void {}
}
