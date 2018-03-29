import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { LocalStorageService } from '../../../services/localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root-login',
  templateUrl: './root-login.component.html',
  styleUrls : ['./root-login.component.css']
})
export class RootLoginComponent implements OnInit {
  loginForm: FormGroup;
  loginFormErrors: any;
  constructor(private formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _localStorageService: LocalStorageService,
    private router: Router) {
    this.loginFormErrors = {
      email   : {},
      password: {}
  };
  }

  ngOnInit()  {
      this.loginForm = this.formBuilder.group({
          email   : ['', [Validators.required, Validators.email]],
          password: ['', Validators.required]
      });

      this.loginForm.valueChanges.subscribe(() => {
          this.onLoginFormValuesChanged();
      });
  }

  onLoginFormValuesChanged()  {
      for ( const field in this.loginFormErrors )   {
          if ( !this.loginFormErrors.hasOwnProperty(field) )  {
              continue;
          }

          // Clear previous errors
          this.loginFormErrors[field] = {};

          // Get the control
          const control = this.loginForm.get(field);

          if ( control && control.dirty && !control.valid )  {
              this.loginFormErrors[field] = control.errors;
          }
      }
  }

  loginFormSubmit() {
    this._loginService.login(this.loginForm).subscribe(
        data => {
            if (data.access_token) {
                this._localStorageService.setItem('Authorization', 'Bearer ' + data.access_token, false);
                this._localStorageService.setItem('rememberMe', false, false);
                this.router.navigate(['/admin/product']);
            }
        },
        err => {
            console.log(err);
        }
    );

  }
}
