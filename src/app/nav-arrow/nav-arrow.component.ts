import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-nav-arrow',
  templateUrl: './nav-arrow.component.html',
  styleUrls: ['./nav-arrow.component.css'],
  animations: [
    trigger('arrowState', [
      state('active', style({
        transform: 'scale(1.5) rotate(135deg)',
        'border-size': '3px'
      })),
      state('inactive', style({
        transform: 'scale(1) rotate(135deg)',
        'border-size': '2px'
      })),
      transition('inactive <=> active', animate(150))
    ])
  ]
})

export class NavArrowComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  currentID
  components = ['home','about','offer','prizes','contact'];
  rightState = 'inactive'
  leftState = 'inactive'
  timeoutID

  ngOnInit() {}

  getCurrentID() {
    return this.components.indexOf(this.route.snapshot.firstChild.url[0].path)
  }
  
  nextComponent() {
    let nextComponent
    this.getCurrentID()
    this.rightState = 'active'
    this.getCurrentID() === this.components.length-1 ? nextComponent = this.components[0] : nextComponent = this.components[this.getCurrentID()+1]
    this.router.navigate([nextComponent])

    // this.currentID = this.components.indexOf(this.route.snapshot.firstChild.url[0].path)+1
    // this.currentID===this.components.length ? this.router.navigate([this.components[0]]) : this.router.navigate([this.components[this.currentID]]);
    this.timeoutID = setTimeout(() => {
      this.rightState = 'inactive'
    }, 200);
    this.timeoutID = setTimeout(() => {
      document.getElementById(nextComponent).scrollIntoView()
    }, 0)
  }

  previousComponent() {   
    this.leftState = 'active'    
    this.currentID = this.components.indexOf(this.route.snapshot.firstChild.url[0].path)-1
    this.currentID < 0 ? this.router.navigate([this.components[this.components.length-1]]) : this.router.navigate([this.components[this.currentID]]);
    this.timeoutID = setTimeout(() => {
      this.leftState = 'inactive'
    }, 200);
  }

}
