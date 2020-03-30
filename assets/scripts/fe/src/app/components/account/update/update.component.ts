import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { User } from '../../../commons/models/user.models';
import { ProfileForm } from '../../../commons/forms/users.forms';
import { UserService } from '../../../commons/services/users/user.service';
import { AuthService } from '../../../commons/services/auth/auth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public form: ProfileForm;

  constructor(
    private auth: AuthService,
    private users: UserService,
    private state: StateService
  ) { }

  ngOnInit() {
    this.form = new ProfileForm(new User(this.auth.user ));
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    this.form.submitted = true;
    if (valid) {
      // send the data to the backend server
      this.users.update(value)
        .then((resp: any) => {
          // successful request, redirect to
          // job list page.
          this.auth.setUser();
          this.state.go('profile');
        })
        .catch((err: any) => {
          this.form.errors = err;
        })
        ;
    }
  }

}
