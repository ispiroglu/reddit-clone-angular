import { Injectable } from '@angular/core';
import { AuthService } from "../../auth/service/auth-service.service";
import { LoginRequestPayload } from "../../auth/login/model/login-request.payload";
import { LoginResponsePayload } from "../../auth/login/model/login-response.payload";
import { jwt_decode } from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class SessionManagementService {
  expiringDate

  constructor(private authService: AuthService) { }

  login(loginCredentials: LoginRequestPayload) {
    this.authService.login<LoginResponsePayload>(loginCredentials)
      .subscribe((response) => {
        const rawToken = response.body?.access_token
        const decodedToken = jwt_decode(rawToken)
        console.log(decodedToken)

        this.autoLogout(new Date(decodedToken.exp * 1000).getTime() - new Date().getTime())
      })
  }

  logout() {

  }

  private autoLogout(expirationDuration: number) {
      this.
  }
}
