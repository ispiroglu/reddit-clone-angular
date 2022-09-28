import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupRequestPayload } from './model/signup-request.payload';
import { SessionManagementService } from '../../shared/session-management/session-management.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  hasTried = false;
  signupForm: FormGroup;
  signupRequestPayload: SignupRequestPayload;

  constructor(
    private sessionManagementService: SessionManagementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ]),
    });

    this.sessionManagementService.errorOnLogin.subscribe((errorMessage) => {
      if (this.hasTried)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'There is already a user with this username or email !', // TODO: should return the correct error message !
        });
    });
    this.sessionManagementService.isLoggedIn.subscribe((isLoggedIn) => {
      if (isLoggedIn) this.router.navigate(['/']);
      else this.hasTried = true;
    });
  }

  isUsernameInvalid(): Boolean {
    const formControl = this.signupForm.get('username')!!;
    return formControl.invalid && formControl.touched;
  }
  isEmailInvalid(): Boolean {
    const formControl = this.signupForm.get('email')!!;
    return formControl.invalid && formControl.touched;
  }
  isPasswordInvalid(): Boolean {
    const formControl = this.signupForm.get('password')!!;
    return formControl.invalid && formControl.touched;
  }

  onSubmit() {
    this.signupRequestPayload = {
      username: this.signupForm.get('username')!!.value,
      email: this.signupForm.get('email')!!.value,
      password: this.signupForm.get('password')!!.value,
    };
    this.sessionManagementService.signup(this.signupRequestPayload);
  }
}
