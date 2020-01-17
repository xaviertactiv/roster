import { ContentOnly } from '../../commons/utils/layout.utils';
import { LoginRequired } from '../../commons/utils/security.utils';

import { CreateComponent } from './create/create.component';


export const JOBS_STATES: object[] = [
    {
        name: 'jobs-create',
        url: '/jobs/create',
        views: ContentOnly(CreateComponent),
        onEnter: LoginRequired
    }
];
