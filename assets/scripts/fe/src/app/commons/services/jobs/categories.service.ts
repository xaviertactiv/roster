import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_JOBS_CATEGORY } from '../../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get(API_JOBS_CATEGORY)
      .toPromise()
    ;
  }

  create(data: any) {
    return this.http.post(API_JOBS_CATEGORY, data)
      .toPromise()
    ;
  }
}
