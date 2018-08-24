import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from '../article.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-slideshow-banner',
  templateUrl: './slideshow-banner.component.html',
  styleUrls: ['./slideshow-banner.component.css'],
  providers: [ ArticleService ]
})
export class SlideshowBannerComponent implements OnInit {

  imageUrls = [
  ];

  height: string = '400px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = true;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  width: string = '100%';


  constructor(private router: Router, private articleService: ArticleService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    let bannersInDatabase;

    let imageString = this.imageUrls;
    this.articleService.getArticles().subscribe(dataLastEmittedFromObserver => {
      bannersInDatabase = dataLastEmittedFromObserver;
      for(let x = 0; x <= bannersInDatabase.length; x++){
        bannersInDatabase.forEach(function(banner){
          if(banner.tags[x] === "Banner" || banner.tags[x] === "banner"){
            imageString.push({ url: banner.image, clickAction: () => alert('custom click function'), caption: banner.subtitle });
          } else {
          }
        });
      }
    });
    this.imageUrls = imageString;
  }


}
