import { NavSideContent } from '../../../commons/utils/layout.utils';
import { LoginRequired } from '../../../commons/utils/security.utils';
import { DashboardComponent } from './dashboard/dashboard.component';


export const CLIENTS_STATES: object[] = [
  {
    name: 'client-dashboard',
    url: '/c/dashboard',
    views: NavSideContent(DashboardComponent),
    onEnter: LoginRequired
  }
]