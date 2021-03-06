import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { AuthService } from '../../../commons/services/auth/auth.service';
import { Login } from '../../../commons/models/login.models';
import { LoginForm } from '../../../commons/forms/users.forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private form: LoginForm;

  constructor(
    private auth: AuthService,
    private state: StateService
  ) { }

  ngOnInit() {
    // initialize login form.
    this.form = new LoginForm(new Login());
  }

  onSubmit({value, valid}: {value: Login, valid: boolean}) {
    if (valid) {
      // send the data to the backend server
      this.auth.login(value)
        .then((resp: any) => {
          // redirect to the dashboard
          this.state.go(`${this.auth.user.is_client ? 'client' : 'contractor'}-dashboard`);
        })
        .catch((err: any) => {
          this.form.errors = err;
        })
      ;
    }
  }

}
