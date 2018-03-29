import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-root',
  templateUrl: './admin.component.html'
})
export class AdminComponent {

  constructor(private _localStorageService: LocalStorageService,
              private router: Router) {

  }
  logOut(): void {

    this._localStorageService.removeItem('Authorization');
    this._localStorageService.removeItem('rememberMe');
    this._localStorageService.removeItem('user');
    this.router.navigate(['/root/login']);
}


}
