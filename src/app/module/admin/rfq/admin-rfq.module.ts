import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRfqComponent } from './admin-rfq.component';
import { AdminRfqRoutingModule } from './admin-rfq.routing';


@NgModule({
  imports: [
    CommonModule,
    AdminRfqRoutingModule,
  ],
  declarations: [AdminRfqComponent]
})
export class AdminRfqModule { }
