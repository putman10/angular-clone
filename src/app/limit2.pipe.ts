import {Pipe, PipeTransform} from '@angular/core';
import {Article} from './models/article.model';

import * as _ from 'lodash';

@Pipe({
  name: 'Limit2Pipe',
  pure: false
})

export class Limit2Pipe implements PipeTransform {
  transform(input: Article[]){
        return input.slice(0, 2);
  }
}
