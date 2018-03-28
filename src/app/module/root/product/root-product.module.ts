import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootProductRoutingModule } from './root-product.routing';
import { RootProductComponent } from './root-product.component';

@NgModule({
  imports: [
    CommonModule,
    RootProductRoutingModule,
  ],
  declarations: [RootProductComponent]
})
export class RootProductModule { }
