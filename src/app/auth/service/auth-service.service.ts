import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../shared/base-http/base-http.service';
import { LOCALHOST_LOGIN_URL, LOCALHOST_SIGNUP_URL } from './auth-constants.constans';
import {SignupRequestPayload} from "../signup/model/signup-request.payload";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseHttpService {

  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  signup<T>(signupPayload: SignupRequestPayload, params?: HttpParams) {
    return this.httpPost<T>(LOCALHOST_SIGNUP_URL, signupPayload, undefined, params)
  }

  login<T>(loginPayload: any, params?: HttpParams) {
    return this.httpPost<T>(LOCALHOST_LOGIN_URL, loginPayload, undefined, params)
  }

  /*
  * Servis icerisinde credentialler tutulup erisime acilabilir acilabilir.
  * */
}
