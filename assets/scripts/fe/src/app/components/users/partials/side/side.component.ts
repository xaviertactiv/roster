import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../../commons/services/auth/auth.service';
import { CategoriesService } from '../../../../commons/services/jobs/categories.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  public userState: string;
  public initial: number = 4;
  public isExtend: boolean = false;
  public categoriesList: any;

  constructor(
    private auth: AuthService,
    private categories: CategoriesService
  ) { }

  ngOnInit() {
    this.userState = this.auth.user.is_client ? 'client' : 'contractor';
    this.categories.list().then( (resp) => {
      this.categoriesList = resp;
    });
  }

  toggle() {
    this.isExtend = !this.isExtend;
    this.initial = this.isExtend ? this.categoriesList.length : 4;
  }

}
