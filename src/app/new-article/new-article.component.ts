import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
  providers: [ArticleService]
})
export class NewArticleComponent implements OnInit {
  tags = [];

  constructor(private router: Router, private articleService: ArticleService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
  }

  addNewArticle(title: string, subtitle: string, author: string, image: string, bodyText: string, category: string, publishedDate: string) {
  let newArticle = new Article(title, subtitle, author, image, bodyText, category, publishedDate, this.tags);
  this.articleService.updateDatabase(newArticle);
  this.tags = [];
  this.router.navigate(['admin']);
}

addTag(tag:string){
  this.tags.push(tag);
  }

}
