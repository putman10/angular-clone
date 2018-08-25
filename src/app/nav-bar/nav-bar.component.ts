import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';
import { ArticleService } from '../article.service';
import { UniquePipe } from '../unique.pipe';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [ArticleService]
})
export class NavBarComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;
  menuToggleState = 0;

  toggleMenu(){
    if(this.menuToggleState == 0){
      this.menuToggleState ++;
    } else {
      this.menuToggleState --;
    }
  }

  closeMenu(){
      this.menuToggleState --;
  }

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private articleService: ArticleService) { }
  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  goToCategory(selectedCategory){
    let lowercaseSelCategory = selectedCategory.toLowerCase();
    this.router.navigate(['categories', lowercaseSelCategory]);
  }

}
