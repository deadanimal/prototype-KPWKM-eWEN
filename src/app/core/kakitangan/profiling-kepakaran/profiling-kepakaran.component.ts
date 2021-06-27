import { Component, OnInit } from '@angular/core';
import swal from "sweetalert2";

@Component({
  selector: 'app-profiling-kepakaran',
  templateUrl: './profiling-kepakaran.component.html',
  styleUrls: ['./profiling-kepakaran.component.scss']
})
export class ProfilingKepakaranComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  confirm() {
    swal
      .fire({
        title: "Pengesahan",
        text: "Anda pasti?",
        type: "info",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-info",
        confirmButtonText: "Pasti",
        showCancelButton: true,
        cancelButtonClass: "btn btn-danger",
        cancelButtonText: "Batal",
      })
      .then((result) => {
        if (result.value) {
          this.register();
        }
      });
  }

  register() {
    swal
      .fire({
        title: "Berjaya",
        text: "Maklumat anda telah dihantar",
        type: "success",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Tutup",
      })
      .then((result) => {
        if (result.value) {
        }
      });
  }
}
