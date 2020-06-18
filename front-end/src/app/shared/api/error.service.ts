import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ErrorMessageComponent } from '../components/error-message/error-message.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private modalService: NgbModal) { }

  DisplayError(message): any {
    const options: NgbModalOptions = { backdrop: 'static' };
    const modalRef: NgbModalRef = this.modalService.open(ErrorMessageComponent, options);
    modalRef.componentInstance.ErrorMessage = message;
  }

}
