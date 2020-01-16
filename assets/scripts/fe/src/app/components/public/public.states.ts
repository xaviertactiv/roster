import { ContentOnly } from '../../commons/utils/layout.utils';
import { Disconnect } from '../../commons/utils/security.utils';
import { LoginComponent } from './login/login.component';


export const PUBLIC_STATES: object[] = [
  {
    name: 'login',
    url: '/login',
    views: ContentOnly(LoginComponent),
    params: {next: window.location.pathname}
  },
  {
    name: 'logout',
    url: '/logout',
    onEnter: Disconnect
  }
];
