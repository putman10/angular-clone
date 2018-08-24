import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {SlideshowModule} from 'ng-simple-slideshow';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SlideshowBannerComponent } from './slideshow-banner/slideshow-banner.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    EditArticleComponent,
    NewArticleComponent,
    ArticleDetailsComponent,
    NavBarComponent,
    SlideshowBannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    SlideshowModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
