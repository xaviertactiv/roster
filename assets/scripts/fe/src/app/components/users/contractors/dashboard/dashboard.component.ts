import { JobService } from './../../../../commons/services/jobs/job.service';
import { Component, OnInit, HostListener } from '@angular/core';

import { AuthService } from '../../../../commons/services/auth/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public jobsList: any = [];
  public nextPage: any = 0;
  public count: number;

  constructor(
    private auth: AuthService,
    private jobs: JobService
  ) { }

  ngOnInit() {
    // fetch data from the backend
    this.loadData();

  }

  loadData() {
    if(this.nextPage != null) {
      this.jobs.list({'params': {'offset': this.nextPage}}).then((resp) => {
        this.jobsList.push(...resp['results']);
        this.count = resp['count'];
        this.nextPage = new URLSearchParams(resp['next']);
        this.nextPage = resp['next'] ? this.nextPage.get('offset'): null;
      })
    }
  }

  @HostListener('window:scroll', ['$event'])
  scrolled(event: any): void {
    let scrollHeight = event.target.scrollingElement.scrollHeight;
    let scrollTop = event.target.scrollingElement.scrollTop;
    let clientHeight = event.target.scrollingElement.clientHeight;

    if (((scrollHeight - scrollTop) - clientHeight) < 5){
      this.loadData()
    }
  }
}
