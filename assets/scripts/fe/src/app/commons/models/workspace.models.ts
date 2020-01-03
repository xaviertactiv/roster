// tslint:disable: variable-name

/* Model class for the workspace
 */
export class WorkSpace {
  id: string = null;
  name: string = null;
  date_created: string = null;
  date_updated: string = null;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
