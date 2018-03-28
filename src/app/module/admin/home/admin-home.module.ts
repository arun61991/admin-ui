import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeRoutingModule } from './admin-home.routing';
import { AdminHomeComponent } from './admin-home.component';


@NgModule({
  imports: [
    CommonModule,
    AdminHomeRoutingModule,
  ],
  declarations: [AdminHomeComponent]
})
export class AdminHomeModule { }
