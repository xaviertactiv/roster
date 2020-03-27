import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_JOBS_APPLICATION } from '../../constants/api.constants';
import { Application } from '../../models/jobs.models';
@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
  public applications: Application;
  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get(API_JOBS_APPLICATION)
      .toPromise()
      .then( (resp) => {
        console.log(resp);
      })
    ;
  }

  create(data: any) {
    return this.http.post(API_JOBS_APPLICATION, data)
      .toPromise()
    ;
  }
}
