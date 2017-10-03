import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('componentState', [
      state('visible', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('hidden => visible', animate(500))
    ]),
  ]
})

export class HomeComponent implements OnInit {

  constructor(

  ) {}

  state = 'hidden';
  timeoutID

  ngOnInit() {
    this.timeoutID = setTimeout(() => {
      this.state = 'visible'
    }, 100);

    document.getElementById('home').scrollIntoView()

  }

}
