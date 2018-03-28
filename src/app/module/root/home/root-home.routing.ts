import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootHomeComponent } from './root-home.component';


export const HOME_ABOUT_US_ROUTES: Routes = [
    { path: '', component: RootHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(HOME_ABOUT_US_ROUTES)],
  exports: [RouterModule]
})

export class RootHomeRoutingModule {}
