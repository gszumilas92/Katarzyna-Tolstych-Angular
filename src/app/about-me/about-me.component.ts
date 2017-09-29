import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  providers: [],
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
export class AboutMeComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  state = 'hidden';
  timeoutID

  diplomes = [
    { src: "assets/doradca-personalny.jpg", alt: "doradca personalny" },
    { src: "assets/promocja-zdrowia.jpg", alt: "promocja zdrowia" },
    { src: "assets/dyplom-rtz.jpg", alt: "dyplom rtz" },
    { src: "assets/psychospoleczne-zagrozenia.jpg", alt: "certyfikat psychospoleczne zagrozenia" }
  ];
  
  openModal(src) {
    //send data to Subject
    // this.modalService.mySubject.next( {display: 'block', src: src} );
    this.modalService.mySubject.next( {state: 'visible', src: src} );
    

  }

  ngOnInit() {
    this.timeoutID = setTimeout(() => {
      this.state = 'visible'
    }, 100);


  }

}
