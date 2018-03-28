import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootLoginRoutingModule } from './root-login.routing';
import { RootLoginComponent } from './root-login.component';

@NgModule({
  imports: [
    CommonModule,
    RootLoginRoutingModule,
  ],
  declarations: [RootLoginComponent]
})
export class RootLoginModule { }
