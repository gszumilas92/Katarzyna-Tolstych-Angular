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
        display: 'block',
        opacity: 1
      })),
      state('hidden', style({
        // display: 'none',
        opacity: 0
      })),
      transition('hidden <=> visible', animate(500))
    ]
  )]
})
export class ModalComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  display
  state
  src

  closeModal() {
    // this.display = 'none';
    this.state = 'hidden'
  }

  ngOnInit() { 
    // this.modalService.mySubject.subscribe (
    //   (data) => {
    //     this.display = data['display'];
    //     this.src = data['src'];
    //   }
    // )
    this.modalService.mySubject.subscribe (
      (data) => {
        this.state = data['state'];
        this.src = data['src'];
      }
    )
  }

}
