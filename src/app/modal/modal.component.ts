import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  display
  src

  closeModal() {
    this.display = 'none';
  }

  ngOnInit() { 
    this.modalService.mySubject.subscribe (
      (data) => {
        this.display = data['display'];
        this.src = data['src'];
      }
    )
  }

}
