import { PUBLIC_STATES } from '../../components/public/public.states';
import { CONTRACTORS_STATES } from '../../components/users/contractors/contractors.states';
import { JOBS_STATES } from '../../components/jobs/jobs.states';


export const APP_STATES = {
  otherwise : '/login',
  states    : [].concat(
    PUBLIC_STATES,
    CONTRACTORS_STATES,
    JOBS_STATES
  )
};
