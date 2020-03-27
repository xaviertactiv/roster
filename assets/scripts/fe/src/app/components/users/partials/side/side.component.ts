import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../../commons/services/auth/auth.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  public userState: string;

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.userState = this.auth.user.is_client ? 'client' : 'contractor';
  }

}
