// tslint:disable: variable-name
import { WorkSpace } from './workspace.models';

/* Model class for User object
 */
export class User {
  id: string = null;
  email: string = null;
  first_name: string = null;
  last_name: string = null;
  image: string = null;
  date_joined: string = null;
  date_updated: string = null;
  workspaces: WorkSpace[] = new Array<WorkSpace>();

  constructor(data = {}) {
    Object.assign(this, data);
  }

  /* get the displayed name.
   * returns the email if name is null
   */
  displayName() {
    if (this.first_name && this.last_name) {
      return `${this.first_name} ${this.last_name}`;
    }
    return `${this.email}`;
  }
}
