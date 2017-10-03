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
      transition('hidden => visible', animate(500))
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
    //send data to Subject (modal)
    this.modalService.mySubject.next( {state: 'visible', src: src} );
  }

  scrollTo(element, to, duration) {
    let start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
        
    let animateScroll = function(){        
        currentTime += increment;
        var val = this.math(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
  }

  Math.easeInOutQuad(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  }

  ngOnInit() {
    this.timeoutID = setTimeout(() => {
      this.state = 'visible'
    }, 100);

    this.scrollTo(document.body, 0, 1250);   
    // document.getElementById('aboutMe').scrollIntoView()

  }

}
