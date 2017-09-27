import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-nav-arrow',
  templateUrl: './nav-arrow.component.html',
  styleUrls: ['./nav-arrow.component.css']
})

export class NavArrowComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  currentID
  components = ['home','about','offer','prizes','contact'];
  
  ngOnInit() {}
  
  nextComponent() {
    this.currentID = this.components.indexOf(this.route.snapshot.firstChild.url[0].path)+1
    this.currentID===this.components.length ? this.router.navigate([this.components[0]]) : this.router.navigate([this.components[this.currentID]]);
  }

  previousComponent() {   
    this.currentID = this.components.indexOf(this.route.snapshot.firstChild.url[0].path)-1
    this.currentID < 0 ? this.router.navigate([this.components[this.components.length-1]]) : this.router.navigate([this.components[this.currentID]]);
  }

}
