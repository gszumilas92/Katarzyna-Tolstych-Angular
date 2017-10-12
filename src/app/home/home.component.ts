import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BootingService } from './booting.service';

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

  constructor(private booting: BootingService) {}
  
  state = 'hidden';
  timeoutID

  ngOnInit() {
    if (this.booting.firstLoad) {
      this.booting.firstLoad = false;
      this.state = 'visible'
    } else {
      this.timeoutID = setTimeout(() => {
        document.getElementById('home').scrollIntoView({behavior: "smooth", block:"start"})
        this.state = 'visible'
      }, 100);
    }
  }

}
