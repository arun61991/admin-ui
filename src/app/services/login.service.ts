import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ResponseVO } from '../shared/vo/ResponseVO';
import { ProductVO } from '../shared/vo/ProductVO';
import { CustomHttpService } from './customHttp.service';
import {  FormGroup } from '@angular/forms';
import { LocalStorageService } from './localstorage.service';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private _customHttpService: CustomHttpService,
    private _localStorageService: LocalStorageService) {
  }


login(loginForm: FormGroup): Observable<any> {

const body = new HttpParams().set('username', loginForm.controls['email'].value)
.set('password', loginForm.controls['password'].value)
.set('client_id', 'my-trusted-client')
.set('grant_type', 'password');
this._localStorageService.setItem('Authorization', 'Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0');
const url =  'http://localhost:8080/oauth/token';
return this._customHttpService.postLoginRequest(url, body.toString());
}

}
