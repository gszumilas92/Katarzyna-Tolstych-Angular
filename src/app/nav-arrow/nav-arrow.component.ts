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
  components = ['home','about','offer','prizes','contact']
  rightState = 'inactive'
  leftState = 'inactive'
  timeoutID

  ngOnInit() {}

  getCurrentID() {
    // return this.components.indexOf(this.route.snapshot.firstChild.url[0].path) It was working, when nav-arrow was in main component
    return this.components.indexOf(this.route.snapshot.url[0].path); //This one works inside the components    
  }
  
  nextComponent() {
    let nextComponent
    this.rightState = 'active'
    this.getCurrentID() === this.components.length-1 ? nextComponent = this.components[0] : nextComponent = this.components[this.getCurrentID()+1]
    this.router.navigate([nextComponent])
    this.timeoutID = setTimeout(() => {
      this.rightState = 'inactive'
    }, 200);
    this.scrollToComponent(nextComponent)
  }

  scrollToComponent(component) {
    this.timeoutID = setTimeout(() => {
      document.getElementById(component).scrollIntoView()
    }, 0)
  }

  previousComponent() {   
    let previousComponent
    this.leftState = 'active'    
    this.getCurrentID() === 0 ? previousComponent = this.components[this.components.length-1] : previousComponent = this.components[this.getCurrentID()-1]
    this.router.navigate([previousComponent])
    this.timeoutID = setTimeout(() => {
      this.leftState = 'inactive'
    }, 200);
    this.scrollToComponent(previousComponent)
  }

}
