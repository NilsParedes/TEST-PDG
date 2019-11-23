import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loading = false;
  error = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    init_plugins();
    this.inicializarControles();
  }

  inicializarControles() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() { return this.loginForm.controls; }

  login() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.loading = true;
      return this.authService.login(this.loginForm.value).subscribe(
        res => {
          if (res) {
            localStorage.setItem('token', res['access_token']);
            this.error = false;
            this.loading = false;
            this.router.navigate(['/bienvenido']);
          }
        },
        err => {
          this.error = true;
          this.loading = false;
        }
      );
    }
  }

}
