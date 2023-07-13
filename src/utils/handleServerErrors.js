import { SOMETHING_WRONG_ERROR_MSG, TOO_MANY_REQUESTS_ERROR_MSG } from '../constants/infoToolTipMessage';
import { BAD_REQUEST, CONFLICT, TOO_MANY_REQUESTS, UNAUTHORIZED } from '../constants/serverErrorStatus';

export function handleServerErrors(err) {
  if (err.status === BAD_REQUEST) {
    return err.validation.body.message;
  }

  if (err.status === UNAUTHORIZED) {
    return err.message;
  }

  if (err.status === CONFLICT) {
    return err.message;
  }

  if (err.status === TOO_MANY_REQUESTS) {
    return TOO_MANY_REQUESTS_ERROR_MSG;
  }

  return SOMETHING_WRONG_ERROR_MSG
}
