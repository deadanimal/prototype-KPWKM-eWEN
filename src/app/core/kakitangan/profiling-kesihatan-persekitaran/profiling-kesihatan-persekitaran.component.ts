import { Component, OnInit } from '@angular/core';
import swal from "sweetalert2";

@Component({
  selector: 'app-profiling-kesihatan-persekitaran',
  templateUrl: './profiling-kesihatan-persekitaran.component.html',
  styleUrls: ['./profiling-kesihatan-persekitaran.component.scss']
})
export class ProfilingKesihatanPersekitaranComponent implements OnInit {

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
