import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
  providers: [ArticleService]
})
export class ArticleDetailsComponent implements OnInit {
  articleId: string = null;
  article;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private articleService: ArticleService) { }
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.articleId = urlParameters['id'];
    });
    this.article = this.articleService.getArticleById(this.articleId)
  }

}
