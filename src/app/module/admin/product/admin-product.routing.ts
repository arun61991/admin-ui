import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductComponent } from './admin-product.component';




export const HOME_ABOUT_US_ROUTES: Routes = [
    { path: '', component: AdminProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(HOME_ABOUT_US_ROUTES)],
  exports: [RouterModule]
})

export class AdminProductRoutingModule {}
