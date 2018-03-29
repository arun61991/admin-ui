import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { Router } from '@angular/router';

import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { Observable } from 'rxjs/Observable';

import {Location} from '@angular/common';
import { LocalStorageService } from '../../services/localstorage.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _location: Location, protected router: Router, private _localStorageService: LocalStorageService)
  {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.isUserLoggedIn()) {

        return true;

    } else {

        this.navigateToLogin();
        return false;
    }
  }

  navigateToHome() {
    this.router.navigate(['/root/login']);
  }
  navigateToLogin() {
    this.router.navigate(['/root/login']);
  }

  isUserLoggedIn(): boolean {
    let tokenflag = false;
    const token: string = this._localStorageService.getItem('Authorization', '');
    if (token != null && token !== '') {
        tokenflag = true;
    }
    return tokenflag;
}
}
