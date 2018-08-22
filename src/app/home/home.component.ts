import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

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

}