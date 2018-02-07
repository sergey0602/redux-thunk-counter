import { SERVER_REQUEST, SUCCESS, FAIL } from './constants';

export const serverRequest = () => ({
  type: SERVER_REQUEST
});

export const success = (data) => ({
  type: SUCCESS,
  payload: data
});

export const fail = () => ({
  type: FAIL
});
