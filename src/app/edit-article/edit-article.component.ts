import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../models/article.model';
import { ArticleService } from '../article.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css'],
  providers: [ArticleService]
})
export class EditArticleComponent implements OnInit {
  articleId: string = null;
  article;
  tempTagArray = [];

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private articleService: ArticleService) { }
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.articleId = urlParameters['id'];
    });
    this.article = this.articleService.getArticleById(this.articleId);
    this.article.subscribe(dataLastEmittedFromObserver => {
      this.tempTagArray = dataLastEmittedFromObserver.tags;
    });
  }

  saveArticle(title: string, subtitle: string, author: string, image: string, bodyText: string, category: string, publishedDate: string) {
    let articleInFirebase = this.articleService.getArticleById(this.articleId);
    articleInFirebase.update({
      title: title,
      subtitle: subtitle,
      author: author,
      image: image,
      bodyText: bodyText,
      category: category,
      publishedDate: publishedDate,
      tags: this.tempTagArray
    });
    this.router.navigate(['admin']);
  }

  deleteArticle() {
    let articleInFirebase = this.articleService.getArticleById(this.articleId);
    articleInFirebase.remove();
    this.router.navigate(['admin']);
  }

  deleteTag(tag) {
    let index = this.tempTagArray.indexOf(tag);
    this.tempTagArray.splice(index, 1);
  }

  addTag(tag:string){
  this.tempTagArray.push(tag);
  }

}
