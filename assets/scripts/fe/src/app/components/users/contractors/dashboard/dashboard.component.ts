import { JobService } from './../../../../commons/services/jobs/job.service';
import { Component, OnInit, HostListener } from '@angular/core';

import { AuthService } from '../../../../commons/services/auth/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
    this.loadData();
    // this.loadData();
   
  }

  loadData() {   
    this.jobs.list(this.params);

  }
  
  setParam(){
    delete this.params["page"];
    this.params["search"] = this.keyword;
    this.params["ordering"] = this.sortBy == 'newest' ? '-date_created' : 'date_created';

    this.loadData();
  }

  @HostListener('window:scroll', ['$event'])
  scrolled(event: any): void {
    let scrollHeight = event.target.scrollingElement.scrollHeight;
    let scrollTop = event.target.scrollingElement.scrollTop;
    let clientHeight = event.target.scrollingElement.clientHeight;
    
    if (((scrollHeight - scrollTop) - clientHeight) == 0){
      let nextPage = this.jobs.jobs.next ? new URL(this.jobs.jobs.next).searchParams.get('page') : null;
      this.params["page"] = nextPage;
      if(this.params["page"]) {
        this.loadData();
      }
    }
  }
}
