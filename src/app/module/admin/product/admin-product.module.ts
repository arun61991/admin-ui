import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductRoutingModule } from './admin-product.routing';
import { AdminProductComponent } from './admin-product.component';



@NgModule({
  imports: [
    CommonModule,
    AdminProductRoutingModule,
  ],
  declarations: [AdminProductComponent]
})
export class AdminProductModule { }
