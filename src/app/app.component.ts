import { Component } from '@angular/core';
import { Article } from './models/article.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Huffington Post';
  articles: Article[] = [
    new Article (
      'Nun’s First Pitch At MLB Game Is Devilishly Good',
      'Bless her wicked sinker.',
      'Ron Dicker',
      './assets/images/nun-softball.jpeg',
      '<p>Sister’s a ringer.</p><p> A nun threw a hell... err.... heckuva ceremonial first pitch before the Kansas City Royals-Chicago White Sox game in Chicago on Saturday.<p> Sister Mary Jo Sobieck of Marian Catholic High School looked like a pro while hurling a sinking ball that maybe even God couldn’t hit.</p><p>And dig that bicep ball bump before her delivery. Holy you-know-what.</p><p>Sobieck reportedly played softball at the College of St. Scholastica in Duluth, Minnesota.</p>',
      'Sports',
      '08/20/2018 06:56 am ET'
    ),
    new Article (
      'Dog’s Death Does Not Mean The End Of Bush’s Baked Beans Commercials',
      'Fan reaction to the sad news reflects how much the ad campaign resonates with the public.',
      'Carla Baranauckas',
      './assets/images/duke.jpg',
      '<p>Long live Duke!</p> <p>That’s the message from Jay Bush, who appears in the TV commercials for Bush’s Baked Beans alongside a chatty golden retriever named Duke whose security clearance is open to question.</p> <p>When the news broke last month about the death of Sam, one of the seven dogs who portrayed Duke over the years, Bush was saddened, even though the dog had not been in the commercials for years.</p> <p>“It was heart-wrenching,” he said.</p>',
      'TV & Film',
      '08/20/2018 03:03 am ET'
    )
  ]
}
