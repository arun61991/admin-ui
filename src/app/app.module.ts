import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ProductService } from './services/product.service';
import { CustomHttpService } from './services/customHttp.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  // <-- #1 import module
import { LocalStorageService } from './services/localstorage.service';
import { LoginService } from './services/login.service';
import { AuthGuard } from './module/admin/authguard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, ReactiveFormsModule, FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [CustomHttpService,
    ProductService,
    LocalStorageService,
    LoginService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
