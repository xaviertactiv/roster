
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_JOBS_CATEGORY } from '../../constants/api.constants';
import { Category } from './../../models/jobs.models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public categories: any[] = [];
  
  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get(API_JOBS_CATEGORY)
      .toPromise().then( (resp) => {
        Object.values(resp).forEach(item => {
          this.categories.push(new Category(item));
        });
      });
    ;
  }

  create(data: any) {
    return this.http.post(API_JOBS_CATEGORY, data)
      .toPromise()
    ;
  }

  getCategories() {
    return this.categories;
  }
}
