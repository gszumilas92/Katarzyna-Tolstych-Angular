import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('modalState', [
      state('visible', style({
        display: 'block'
      })),
      state('hidden', style({
        display:'none'
      }))
    ]),
    trigger('imageState', [
      state('visible', style({
        transform: 'scale(1)'
      })),
      transition('hidden => visible', [
        style({
          //Beginning style for image
          transform: 'scale(0.2)'
        }),
        animate(300)
      ])
    ])
    
  ]
    
  })
export class ModalComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  display
  state = 'hidden'
  src
  alt

  closeModal() {
    this.state = 'hidden';
  }

  ngOnInit() { 
    this.modalService.mySubject.subscribe (
      (data) => {
        this.state = data['state'];
        this.src = data['src'];
        this.alt = data['alt'];
      }
    )
  }

}
