import {Pipe, PipeTransform} from '@angular/core';
import {Article} from './models/article.model';

import * as _ from 'lodash';

@Pipe({
  name: 'CategoryPipe',
  pure: false
})

export class CategoryPipe implements PipeTransform {
  transform(input: Article[], category: string){
let properCaseCategory = category.charAt(0).toUpperCase() + category.slice(1));
    let filteredArray = [];
      input.forEach(function(element){
          if(element.category == properCaseCategory){
            filteredArray.push(element);
          } else {
          }
    });
    return filteredArray;

  }
}
