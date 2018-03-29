import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './module/admin/authguard';


export const APP_ROUTES: Routes = [
  {path: 'admin', loadChildren: 'app/module/admin/admin.module#AdminModule', canActivate : [AuthGuard]},
  {path: 'root', loadChildren: 'app/module/root/root.module#RootModule'},
  {path: '', redirectTo: '/root', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
