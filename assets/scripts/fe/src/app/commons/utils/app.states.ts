import { PUBLIC_STATES } from '../../components/public/public.states';
import { CONTRACTORS_STATES } from '../../components/users/contractors/contractors.states';
import { CLIENTS_STATES } from '../../components/users/clients/clients.states';
import { JOBS_STATES } from '../../components/jobs/jobs.states';
import { ACOUNT_STATES } from '../../components/account/account.states';

export const APP_STATES = {
  otherwise : '/login',
  states    : [].concat(
    PUBLIC_STATES,
    CONTRACTORS_STATES,
    CLIENTS_STATES,
    JOBS_STATES,
    ACOUNT_STATES,
  )
};
