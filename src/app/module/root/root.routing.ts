import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root.component';



export const ROOT_ROUTES: Routes = [
    { path: '', component: RootComponent,
      children : [
          {path : '', loadChildren: 'app/module/root/home/root-home.module#RootHomeModule'},
          {path : 'home', loadChildren: 'app/module/root/home/root-home.module#RootHomeModule'},
          {path : 'product', loadChildren: 'app/module/root/product/root-product.module#RootProductModule'},
          {path : 'login', loadChildren: 'app/module/root/login/root-login.module#RootLoginModule'}
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(ROOT_ROUTES)],
  exports: [RouterModule]
})

export class RootRoutingModule {}
