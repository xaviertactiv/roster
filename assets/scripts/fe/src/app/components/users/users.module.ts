import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';

import { DashboardComponent as C_DashboardComponent } from './contractors/dashboard/dashboard.component';
import { DashboardComponent as F_DashboardComponent } from './clients/dashboard/dashboard.component';

import { NavComponent } from './partials/nav/nav.component';
import { SideComponent } from './partials/side/side.component';



@NgModule({
  declarations: [
    C_DashboardComponent,
    F_DashboardComponent,
    NavComponent,
    SideComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    UIRouterModule
  ]
})
export class UsersModule { }
