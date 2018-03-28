import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootHomeRoutingModule } from './root-home.routing';
import { RootHomeComponent } from './root-home.component';

@NgModule({
  imports: [
    CommonModule,
    RootHomeRoutingModule,
  ],
  declarations: [RootHomeComponent]
})
export class RootHomeModule { }
