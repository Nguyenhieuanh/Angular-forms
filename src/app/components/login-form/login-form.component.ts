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

  onSubmit() {
    if (this.loginForm.value.email === this.email
      && this.loginForm.value.password === this.password) {
      this.submitted = true;
      alert('Welcome!');
    } else {
      this.msg = 'Incorrect email or password.';
    }
  }
}
