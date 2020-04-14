import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_JOBS } from '../../constants/api.constants';
import { Job } from '../../models/jobs.models';
import { JobList } from '../../models/jobs.models';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  public jobs: JobList = new JobList();
  private next: any = 0;

  constructor(
    private http: HttpClient
  ) {}

  create(data: object) {
    return this.http.post(API_JOBS, data)
      .toPromise()
    ;
  }

  list(data: any) {
    return this.http.get(API_JOBS, {params: data})
      .toPromise().then((resp) => {
        if(!resp['previous']){
          this.jobs = new JobList(resp);
        } else {
          this.jobs.results.push(...resp['results']);
          this.jobs.next = resp['next'];
          this.jobs.previous = resp['previous'];
        }
      })
    ;
  }
}
