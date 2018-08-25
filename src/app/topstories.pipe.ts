import {Pipe, PipeTransform} from '@angular/core';
import {Article} from './models/article.model';

import * as _ from 'lodash';

@Pipe({
  name: 'TopStoriesPipe',
  pure: false
})

export class TopStoriesPipe implements PipeTransform {
  transform(input: Article[]){
    let filteredArray = [];
      input.forEach(function(element){
        for(let i = 0; i <= element.tags.length; i++){
          if(element.tags[i] =="Top Stories"){
            filteredArray.push(element);
          } else {
          }
        }
    });
    return filteredArray;

  }
}
