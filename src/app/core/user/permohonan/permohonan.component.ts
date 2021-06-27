import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permohonan',
  templateUrl: './permohonan.component.html',
  styleUrls: ['./permohonan.component.scss']
})
export class PermohonanComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigatePage(path: String) {
    if (path == 'awam') {
      return this.router.navigate(['/user/pemohonan/awam'])
    }
    else  if (path == 'aduan') {
      return this.router.navigate(['/user/pemohonan/aduan'])
    }
    else  if (path == 'pkmd') {
      return this.router.navigate(['/user/pemohonan/pkmd'])
    }
  }

}
