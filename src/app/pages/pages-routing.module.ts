import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkedListComponent } from './linked-list/linked-list.component';

const routes: Routes = [
  {
    path: "linkedList",
    component: LinkedListComponent
  },

  {
    path: "**",
    redirectTo: "linkedList"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
