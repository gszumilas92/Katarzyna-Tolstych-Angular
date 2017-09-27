import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
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
export class ContactComponent implements OnInit {

  constructor() { }

  state = 'hidden';
  timeoutID

  ngOnInit() {
    this.timeoutID = setTimeout(() => {
      this.state = 'visible'
    }, 100);
  }

}
