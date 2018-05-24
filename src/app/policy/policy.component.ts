import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-offer',
  templateUrl: './policy.component.html',
  // styleUrls: ['./policy.component.css'],
  animations: [
    trigger('componentState', [
      state('visible', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('hidden => visible', animate(500)),
    ]),
  ]
})
export class PolicyComponent implements OnInit {

  constructor() { }

  state = 'hidden';
  timeoutID

  ngOnInit() {
    this.timeoutID = setTimeout(() => {
      document.getElementById('offer').scrollIntoView({behavior: "smooth", block:"start"})
      this.state = 'visible'
    }, 100);
  }

}
