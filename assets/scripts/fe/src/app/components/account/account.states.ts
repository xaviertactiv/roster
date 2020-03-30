import { NavSideContent } from '../../commons/utils/layout.utils';
import { LoginRequired } from '../../commons/utils/security.utils';

import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component';


export const ACOUNT_STATES: object[] = [
  {
    name: 'profile',
    url: '/profile',
    views: NavSideContent(ProfileComponent),
    onEnter: LoginRequired
  },
  {
    name: 'edit-profile',
    url: '/edit-profile',
    views: NavSideContent(UpdateComponent),
    onEnter: LoginRequired
  }

];
