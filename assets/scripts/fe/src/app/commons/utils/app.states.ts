import { PUBLIC_STATES } from '../../components/public/public.states';
import { CONTRACTORS_STATES } from '../../components/users/contractors/contractors.states';


export const APP_STATES = {
  otherwise : '/login',
  states    : [].concat(
    PUBLIC_STATES,
    CONTRACTORS_STATES
  )
};
