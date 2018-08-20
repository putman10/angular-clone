import { Component} from '@angular/core';
import { Article } from '../models/article.model'


@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {
  selectedArticle = null;

  finishedEditing() {
  this.selectedArticle = null;
  }

  editArticle(currentArticle){
    this.selectedArticle = currentArticle;
  }

}
