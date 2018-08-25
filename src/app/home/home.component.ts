import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UniquePipe } from '../unique.pipe';
import { Limit2Pipe } from '../limit2.pipe';
import { TopStoriesPipe } from '../topstories.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;

    constructor(private router: Router, private articleService: ArticleService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  viewArticle(currentArticle){
    this.router.navigate(['articles', currentArticle.$key])
  }

  goToCategory(selectedCategory){
    let lowercaseSelCategory = selectedCategory.toLowerCase();
    this.router.navigate(['categories', lowercaseSelCategory]);
  }

}
