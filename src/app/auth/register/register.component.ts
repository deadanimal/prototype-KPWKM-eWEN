import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // Image
  imgLogo = 'assets/img/logo/kpwkm-logo.png'

  // Form
  focusUsername
  focusPassword
  focusConfirmPassword
  registerForm: FormGroup
  registerFormMessages = {
    'username': [
      { type: 'required', message: 'Email diperlukan' },
      { type: 'email', message: 'Sila masukkan email yang sah'}
    ],
    'password1': [
      { type: 'required', message: 'Kata laluan diperlukan' },
      { type: 'minLength', message: 'Kata laluan sekurang-kurangnya 8 aksara' }
    ],
    'password2': [
      { type: 'required', message: 'Sahkan kata laluan' },
      { type: 'minLength', message: 'Kata laluan sekurang-kurangnya 8 aksara' }
    ]
  }
  bar0: string
  bar1: string
  bar2: string
  bar3: string

  constructor(
    private authService: AuthService,
    private notifyService: NotifyService,
    private formBuilder: FormBuilder,
    private loadingBar: LoadingBarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password1: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
      password2: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    })
  }

  createAccount() {
    this.loadingBar.start()
    this.loadingBar.complete()
    this.successMessage()
  }

  navigatePage(path: String) {
    if (path == 'login') {
      return this.router.navigate(['/auth/login'])
    }
  }

  successMessage() {
    let title = 'Akaun sudah didaftarkan'
    let message = 'Berjaya'
    this.notifyService.openToastr(title, message)
  }

}
