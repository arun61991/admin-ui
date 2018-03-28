import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root.component';
import { RootRoutingModule } from './root.routing';

@NgModule({
  imports: [
    CommonModule,
    RootRoutingModule
  ],
  declarations: [RootComponent]
})
export class RootModule { }
