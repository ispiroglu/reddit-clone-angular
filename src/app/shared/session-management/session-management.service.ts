import { Injectable } from '@angular/core';
import { AuthService } from "../../auth/service/auth-service.service";
import { LoginRequestPayload } from "../../auth/login/model/login-request.payload";
import { LoginResponsePayload } from "../../auth/login/model/login-response.payload";
import jwt_decode from 'jwt-decode'
import {BehaviorSubject} from "rxjs";
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../../auth/service/auth-constants.constans";
import {SignupRequestPayload} from "../../auth/signup/model/signup-request.payload";

@Injectable({
  providedIn: 'root'

})
export class SessionManagementService {

  isLoggedIn = new BehaviorSubject<boolean>(false);
  errorOnLogin = new BehaviorSubject<any>('');
  username: string;
  expiringTime: number;

  private tokenExpTimer: any;

  constructor(private authService: AuthService) { }

  login(loginCredentials: LoginRequestPayload) {
    this.authService.login<LoginResponsePayload>(loginCredentials)
      .subscribe((response) => {
        if (response.body === null)
          return
        const rawToken = response.body.access_token
        const decodedToken = jwt_decode(rawToken)
        console.log(decodedToken)
        this.getAttributesFromDecodedToken(decodedToken)
        this.setTokensToLocalStorage(response.body.access_token, response.body.refresh_token)
      }, error => {
        this.isLoggedIn.next(false)
        this.errorOnLogin.next(error.error)
      })
  }

  logout() {
    this.username = ''
    this.expiringTime = 0
    this.tokenExpTimer = null
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    if (this.tokenExpTimer) {
      clearTimeout(this.tokenExpTimer);
    }
    this.tokenExpTimer = null;
    this.isLoggedIn.next(false)
  }

  signup(signupCredentials: SignupRequestPayload) {
    this.authService.signup<LoginResponsePayload>(signupCredentials).subscribe(
      (response) => {
        if (response.body === null)
          return
        const rawToken = response.body.access_token
        const decodedToken = jwt_decode(rawToken)
        console.log(decodedToken)
        this.getAttributesFromDecodedToken(decodedToken)
        this.setTokensToLocalStorage(response.body.access_token, response.body.refresh_token)
      }, error => {
        this.isLoggedIn.next(false)
        this.errorOnLogin.next(error.error)
      }
    )
  }

  private setTokensToLocalStorage(access_token: string, refresh_token: string) {
    localStorage.setItem(ACCESS_TOKEN, access_token);
    localStorage.setItem(REFRESH_TOKEN, refresh_token);
    this.autoLogout(new Date(this.expiringTime).getTime() - new Date().getTime())
  }

  private autoLogin() {

    const decodedAccessToken: any = jwt_decode(localStorage.getItem(ACCESS_TOKEN)!!);
    const tokenExp = new Date(decodedAccessToken.exp * 1000)
    if (!decodedAccessToken || new Date() > tokenExp) {
      return;
    }
    this.getAttributesFromDecodedToken(decodedAccessToken)
    this.isLoggedIn.next(true)
    this.autoLogout(tokenExp.getTime() - new Date().getTime());
  }

  private getAttributesFromDecodedToken(decodedToken: any) {
    this.username = decodedToken.preffered_username;
    this.expiringTime = decodedToken.exp * 1000
    this.isLoggedIn.next(true)
  }

  private autoLogout(expirationDuration: number) {
      this.tokenExpTimer = setTimeout(() => {
        this.logout()
      }, expirationDuration)
  }
}
