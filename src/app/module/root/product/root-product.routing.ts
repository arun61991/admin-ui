import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootProductComponent } from './root-product.component';


export const HOME_ABOUT_US_ROUTES: Routes = [
    { path: '', component: RootProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(HOME_ABOUT_US_ROUTES)],
  exports: [RouterModule]
})

export class RootProductRoutingModule {}
