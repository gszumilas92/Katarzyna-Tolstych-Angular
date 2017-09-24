import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('outletState', [
      state('fadeIn', style({
        opacity: 1,
        transform: 'translateX(0)',
      })),
      state('fadeOut', style({
        opacity: 0,
        transform: 'translateX(50vw)',
      })),
      transition('fadeIn => fadeOut', animate(700) )
    ]),
  ]
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  state="fadeIn"
  
  animate(){
    this.state == 'fadeIn' ? this.state = "fadeOut" : this.state = "fadeIn";
  }  

}
