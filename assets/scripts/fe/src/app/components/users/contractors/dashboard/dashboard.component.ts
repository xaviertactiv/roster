import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../../commons/services/auth/auth.service';
import { JobService } from '../../../../commons/services/jobs/job.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private jobs: JobService
  ) { }

  ngOnInit() {
    // fetch data from the backend
    this.jobs.list();
  }

}
