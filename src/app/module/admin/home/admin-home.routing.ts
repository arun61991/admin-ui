import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home.component';



export const HOME_ABOUT_US_ROUTES: Routes = [
    { path: '', component: AdminHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(HOME_ABOUT_US_ROUTES)],
  exports: [RouterModule]
})

export class AdminHomeRoutingModule {}
