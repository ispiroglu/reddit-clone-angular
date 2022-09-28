import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequestPayload } from './model/login-request.payload';
import { SessionManagementService } from '../../shared/session-management/session-management.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hasTried = false;
  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload;
  errorOnLogin: Boolean = false;

  constructor(
    private sessionManagementService: SessionManagementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.min(8),
        Validators.max(16),
      ]),
    });

    this.sessionManagementService.errorOnLogin.subscribe((errorMessage) => {
      if (this.hasTried)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Wrong credentials!', // TODO: Should handle with error message !
        });
    });
    this.sessionManagementService.isLoggedIn.subscribe((isLoggedIn) => {
      if (isLoggedIn) this.router.navigate(['/']);
      else this.hasTried = true;
    });
  }

  onSubmit() {
    this.loginRequestPayload = {
      username: this.loginForm.get('username')!!.value,
      password: this.loginForm.get('password')!!.value,
    };
    this.sessionManagementService.login(this.loginRequestPayload);
  }

  isUsernameInvalid(): Boolean {
    const value = this.loginForm.get('username')!!;
    return value.invalid && value.dirty;
  }

  isPasswordInvalid(): Boolean {
    const value = this.loginForm.get('password')!!;
    return value.invalid && value.dirty;
  }
}
