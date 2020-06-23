import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  isLogin = false;
  msg = null;

  private email = 'admin@example.com';
  private password = 'password';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.value.email === this.email
      && this.loginForm.value.password === this.password) {
      this.isLogin = true;
      this.msg = 'Welcome admin!';
    } else {
      this.isLogin = false;
      this.msg = 'Incorrect email or password.';
    }
  }
}
