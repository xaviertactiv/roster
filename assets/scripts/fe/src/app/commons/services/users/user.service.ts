import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_AUTH } from '../../constants/api.constants';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  update(data: any) {
    return this.http.put(API_AUTH, data)
      .toPromise()
    ;
  }
}
