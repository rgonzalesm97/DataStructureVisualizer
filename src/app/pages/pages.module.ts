import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LinkedListComponent } from './linked-list/linked-list.component';
import { FormsModule } from '@angular/forms';
import { NodeBoxComponent } from './components/node-box/node-box.component';
import { ArrowComponent } from './components/arrow/arrow.component';






@NgModule({
  declarations: [
    LinkedListComponent,
    NodeBoxComponent,
    ArrowComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
