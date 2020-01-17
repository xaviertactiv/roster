import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_JOBS } from '../../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(
    private http: HttpClient
  ) {}

  create(data: object) {
    return this.http.post(API_JOBS, data)
            .toPromise()
    ;
  }
}
