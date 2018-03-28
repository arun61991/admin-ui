import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminApiComponent } from './admin-api.component';




export const HOME_ABOUT_US_ROUTES: Routes = [
    { path: '', component: AdminApiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(HOME_ABOUT_US_ROUTES)],
  exports: [RouterModule]
})

export class AdminApiRoutingModule {}
