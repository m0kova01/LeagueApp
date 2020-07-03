import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  errorMessage: string;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public set ErrorMessage(error: string) { this.errorMessage = error; }

  closeModal(): void {
    this.activeModal.close();
  }
}
