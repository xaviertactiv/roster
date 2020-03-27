import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { Application } from '../../../commons/models/jobs.models';
import { ApplicationForm } from '../../../commons/forms/application.forms';
import { ApplicationsService } from '../../../commons/services/jobs/applications.service';
@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  private form: ApplicationForm;
  private jobId: number;

  constructor(
    private state: StateService,
    private applications: ApplicationsService
  ) { }

  ngOnInit() {
    // this.applications.list();
    this.form = new  ApplicationForm(new Application());
    this.form.form.patchValue({job: this.state.params.jobId});
  }

  onSubmit({ value, valid }: { value: Application, valid: boolean }) {
    this.form.submitted = true;
    if (valid) {
      console.log(value);
      // send the data to the backend server
      this.applications.create(value)
        .then((resp: any) => {
          // successful request, redirect to
          // job list page.
          this.state.go('contractor-dashboard');
        })
        .catch((err: any) => {
          this.form.errors = err;
        })
        ;
    }
  }



}
