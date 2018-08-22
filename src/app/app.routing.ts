import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';


const appRoutes: Routes = [
  {
     path: '',
     component: HomeComponent
   },
   {
      path: 'admin',
      component: AdminComponent
    },
   {
      path: 'articles/:id',
      component: ArticleDetailsComponent
    },
   {
      path: 'articles/:id/edit',
      component: EditArticleComponent
    },
   {
      path: 'articles/new',
      component: NewArticleComponent
    }
 ];

 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
