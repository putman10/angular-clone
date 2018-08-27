import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from '../article.service';
import { CategoryPipe } from '../category.pipe';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [ArticleService]
})
export class CategoryComponent implements OnInit {

  category: string = null;
  allArticles;
  allArticlesObject;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private articleService: ArticleService) { }
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.category = urlParameters['id'];
    });
    this.allArticles = this.articleService.getArticles();
    this.allArticles.subscribe(dataLastEmittedFromObserver => {
      this.allArticlesObject = dataLastEmittedFromObserver;
    });

  }

}
