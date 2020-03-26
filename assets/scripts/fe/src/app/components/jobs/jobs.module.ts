import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';

import { CreateComponent } from './create/create.component';
import { ApplyComponent } from './apply/apply.component';



@NgModule({
  declarations: [CreateComponent, ApplyComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    UIRouterModule
  ]
})
export class JobsModule { }
