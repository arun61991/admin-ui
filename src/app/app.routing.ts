import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const APP_ROUTES: Routes = [
  {path: 'admin', loadChildren: 'app/module/admin/admin.module#AdminModule'},
  {path: 'root', loadChildren: 'app/module/root/root.module#RootModule'},
  {path: '', redirectTo: '/root', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
