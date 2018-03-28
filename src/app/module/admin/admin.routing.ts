import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';




export const ADMIN_ROUTES: Routes = [
    { path: '', component: AdminComponent,
      children : [
          {path : '', loadChildren: 'app/module/admin/home/admin-home.module#AdminHomeModule'},
          {path : 'home', loadChildren: 'app/module/admin/home/admin-home.module#AdminHomeModule'},
          {path : 'product', loadChildren: 'app/module/admin/product/admin-product.module#AdminProductModule'},
          {path : 'rfq', loadChildren: 'app/module/admin/rfq/admin-rfq.module#AdminRfqModule'},
          {path : 'api', loadChildren: 'app/module/admin/api/admin-api.module#AdminApiModule'}
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
