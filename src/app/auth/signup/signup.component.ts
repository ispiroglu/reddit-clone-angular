import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupRequestPayload } from './model/signup-request.payload'
import { AuthService } from '../service/auth-service.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  signupRequestPayload: SignupRequestPayload

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup(
      {
        username: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      }
    )
  }

  isUsernameInvalid(): Boolean {
    const formControl = this.signupForm.get('username')!!
    return formControl.invalid && formControl.touched
  }
  isEmailInvalid(): Boolean {
    const formControl = this.signupForm.get('email')!!
    return formControl.invalid && formControl.touched
  }
  isPasswordInvalid(): Boolean {
    const formControl = this.signupForm.get('password')!!
    return formControl.invalid && formControl.touched
  }

  onSubmit() {
    this.signupRequestPayload = {
      username: this.signupForm.get('username')!!.value,
      email: this.signupForm.get('email')!!.value,
      password: this.signupForm.get('password')!!.value
    }
    console.log(this.signupRequestPayload);
    this.authService.signup(this.signupRequestPayload).subscribe(
      (response) => {
        console.log(response)
      }
    )
  }
}
