import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
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
export class OfferComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  state="fadeIn"
  
  animate(){
    this.state == 'fadeIn' ? this.state = "fadeOut" : this.state = "fadeIn";
  }  

}
