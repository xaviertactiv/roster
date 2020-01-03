import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';

import { DashboardComponent } from './contractors/dashboard/dashboard.component';
import { NavComponent } from './partials/nav/nav.component';
import { SideComponent } from './partials/side/side.component';



@NgModule({
  declarations: [DashboardComponent, NavComponent, SideComponent],
  imports: [
    CommonModule,
    NgbModule,
    UIRouterModule
  ]
})
export class UsersModule { }
