import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootLoginRoutingModule } from './root-login.routing';
import { RootLoginComponent } from './root-login.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';  // <-- #1 import module
@NgModule({
  imports: [
    CommonModule,
    RootLoginRoutingModule, ReactiveFormsModule, FormsModule
  ],
  declarations: [RootLoginComponent]
})
export class RootLoginModule { }
