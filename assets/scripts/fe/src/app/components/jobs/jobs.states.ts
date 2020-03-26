import { ContentOnly, NavSideContent } from '../../commons/utils/layout.utils';
import { LoginRequired } from '../../commons/utils/security.utils';

import { CreateComponent } from './create/create.component';
import { ApplyComponent } from './apply/apply.component';


export const JOBS_STATES: object[] = [
  {
    name: 'jobs-create',
    url: '/jobs/create',
    views: ContentOnly(CreateComponent),
    onEnter: LoginRequired
  },
  {
    name: 'jobs-apply',
    url: '/jobs/apply/:jobId',
    views: NavSideContent(ApplyComponent),
    onEnter: LoginRequired
  }
];
