import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminApiRoutingModule } from './admin-api.routing';
import { AdminApiComponent } from './admin-api.component';

@NgModule({
  imports: [
    CommonModule,
    AdminApiRoutingModule,
  ],
  declarations: [AdminApiComponent]
})
export class AdminApiModule { }
