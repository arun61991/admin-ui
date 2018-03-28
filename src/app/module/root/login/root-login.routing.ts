import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootLoginComponent } from './root-login.component';



export const HOME_ABOUT_US_ROUTES: Routes = [
    { path: '', component: RootLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(HOME_ABOUT_US_ROUTES)],
  exports: [RouterModule]
})

export class RootLoginRoutingModule {}
