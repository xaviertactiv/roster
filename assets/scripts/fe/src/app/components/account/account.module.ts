import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';

import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [ProfileComponent, UpdateComponent],
  imports: [
    CommonModule,
    NgbModule,
    UIRouterModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
