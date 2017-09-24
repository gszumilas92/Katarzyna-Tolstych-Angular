import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-nav-arrow',
  templateUrl: './nav-arrow.component.html',
  styleUrls: ['./nav-arrow.component.css'],
  animations: [
    trigger('outletState', [
      state('fadeIn', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class NavArrowComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  currentId
  
  ngOnInit() {
    
  }

  state = 'fadeIn';
  array = ['home','about','offer','prizes','contact'];
  
  nextPage() {
    this.currentId = this.array.indexOf(this.route.snapshot.firstChild.url[0].path)
    this.currentId+=1;
    // console.log(this.state);
    // this.state == 'fadeIn' ? this.state = "fadeOut" : this.state = "fadeOut";
    if(this.currentId===this.array.length) {
      this.router.navigate([this.array[0]]);
    } else {
      this.router.navigate([this.array[this.currentId]]);
    }
  }

  previousPage() {
    this.currentId = this.array.indexOf(this.route.snapshot.firstChild.url[0].path)
    this.currentId-=1;
    if(this.currentId < 0) {
      this.router.navigate([this.array[this.array.length-1]]);
    } else {
      this.router.navigate([this.array[this.currentId]]);
    }
  }

}
