// tslint:disable: variable-name


/* Model for Category
 */
export class Category {
  id: string = null;
  name: string = null;
}

/* Model for Tag
 */
export class Tag {
  id: string = null;
  name: string = null;
}

/* Model class for Job
 */
export class Job {
  id: string = null;
  title: string = null;
  contractor: string = null;
  description: string = null;
  categories: Category[] = Array<Category>();
  tags: Tag[] = Array<Tag>();
  date_created: string = null;
  date_updated: string = null;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}


export class Application {
  id: string = null;
  contractor: string = null;
  job: string = null;
  details: string = null;
  rate: number = null;
  status: string = null;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}

