import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./features/components/home/home.component";
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/components/home/home.module').then(m => m.HomeModule)
  },
  // {
  //   path: '**',
  //   loadChildren: () =>
  //     import('./features/components/home/home.module').then(m => m.HomeModule)
  // },
  {
    path: '**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
