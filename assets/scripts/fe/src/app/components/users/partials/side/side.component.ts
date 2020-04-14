import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../../commons/services/auth/auth.service';
import { CategoryService } from '../../../../commons/services/jobs/category.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  public userState: string;
  public limit: number = 4;
  public isExtend: boolean = false;

  constructor(
    private auth: AuthService,
    private categories: CategoryService
  ) { }

  ngOnInit() {
    this.userState = this.auth.user.is_client ? 'client' : 'contractor';
    this.categories.list();
  }

  toggle() {
    this.isExtend = !this.isExtend;
    this.limit = this.isExtend ? this.categories.getCategories().length : 4;
  }

}
