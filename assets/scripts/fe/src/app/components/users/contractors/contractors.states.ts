import { NavSideContent } from '../../../commons/utils/layout.utils';
import { LoginRequired } from '../../../commons/utils/security.utils';
import { DashboardComponent } from './dashboard/dashboard.component';


export const CONTRACTORS_STATES: object[] = [
  {
    name: 'contractor-dashboard',
    url: '/c/dashboard',
    views: NavSideContent(DashboardComponent),
    onEnter: LoginRequired
  }
];
