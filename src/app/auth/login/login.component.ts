import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginRequestPayload } from "./model/login-request.payload"
import { LoginResponsePayload } from "./model/login-response.payload"
import { AuthService } from "../service/auth-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  loginRequestPayload: LoginRequestPayload
  errorOnLogin: Boolean = false

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.min(8), Validators.max(16)])
    })
  }

  onSubmit() {
    this.loginRequestPayload = {
      username: this.loginForm.get('username')!!.value,
      password: this.loginForm.get('password')!!.value
    }
    console.log(this.loginRequestPayload)
    this.authService.login<LoginResponsePayload>(this.loginRequestPayload).subscribe((response) => {
      console.log(response)
    }, error => {
      console.log(error)
      this.errorOnLogin = true
    })
  }

  isUsernameInvalid() : Boolean {
    const value = this.loginForm.get('username')!!
    return value.invalid && value.dirty
  }

  isPasswordInvalid() : Boolean {
    const value = this.loginForm.get('password')!!
    return value.invalid && value.dirty
  }
}
