import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing/landing-routing.module').then(m => m.LandingRoutingModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./modules/todo/todo-routing.module').then(m => m.TodoRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
