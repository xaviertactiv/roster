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
  public keyword: any = '';
  public sortBy: string = "newest";
  private params: any = {};
  public limit: number = 1;

  constructor(
    private auth: AuthService,
    private jobs: JobService
  ) { }

  ngOnInit() {
    // fetch data from the backend
    this.setParam()
  }

  loadData() {   
    if(this.nextPage != null) {

      this.jobs.list(this.params).then((resp) => {

        // if previous is empty set the new joblist else add the joblist
        if(!resp['previous']){
          this.jobsList = resp['results'];
        } else {
          this.jobsList.push(...resp['results']);
        }
        this.count = resp['count'];
        this.nextPage = new URLSearchParams(resp['next']).get('offset');
        this.params["offset"] = this.nextPage;
      })
    }
  }
  
  setParam(){
    this.params["offset"] = null;
    this.params["search"] = this.keyword;
    this.params["ordering"] = this.sortBy == 'newest' ? '-date_created' : 'date_created';
    this.nextPage = 0;
    this.loadData();
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
