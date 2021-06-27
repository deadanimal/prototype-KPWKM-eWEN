import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-aduan-maklumat',
  templateUrl: './aduan-maklumat.component.html',
  styleUrls: ['./aduan-maklumat.component.scss']
})
export class AduanMaklumatComponent implements OnInit {

  // Modal
  modal: BsModalRef;
  modal2: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  constructor(private modalService: BsModalService,) { }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  openModal2(modalRef: TemplateRef<any>) {
    this.modal2 = this.modalService.show(modalRef, {class:'modal-lg'});
  }

  closeModal() {
    this.modal.hide()
  }

  closeModal2(){
    this.modal2.hide()
  }

  ngOnInit() {
  }

}
