import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root.component';
import { RootRoutingModule } from './root.routing';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';  // <-- #1 import module
@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,
    RootRoutingModule
  ],
  declarations: [RootComponent]
})
export class RootModule { }
