import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRfqComponent } from './admin-rfq.component';





export const HOME_ABOUT_US_ROUTES: Routes = [
    { path: '', component: AdminRfqComponent}
];

@NgModule({
  imports: [RouterModule.forChild(HOME_ABOUT_US_ROUTES)],
  exports: [RouterModule]
})

export class AdminRfqRoutingModule {}
