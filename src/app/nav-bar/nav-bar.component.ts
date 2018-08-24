import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  menuToggleState = 0;

  toggleMenu(){
    if(this.menuToggleState == 0){
      this.menuToggleState ++;
    } else {
      this.menuToggleState --;
    }

  }

  ngOnInit() {
  }

}
