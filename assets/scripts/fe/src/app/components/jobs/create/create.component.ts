import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { Job } from '../../../commons/models/jobs.models';
import { JobForm } from '../../../commons/forms/jobs.forms';
import { JobService } from '../../../commons/services/jobs/job.service';

@Component({
  selector: 'app-jobs-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private form: JobForm;

  constructor(
    private jobs: JobService,
    private state: StateService
  ) { }

  ngOnInit() {
    // initialize the job form
    this.form = new JobForm(new Job());
  }

  onSubmit({ value, valid }: { value: Job, valid: boolean }) {
    this.form.submitted = true;
    if (valid) {
      console.log(value);
      // send the data to the backend server
      this.jobs.create(value)
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
