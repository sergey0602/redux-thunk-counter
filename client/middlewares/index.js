import { changeValue, initialValue } from '../Api';
import { serverRequest, success, fail } from '../actions';

export const changeCount = actionType => dispatch => {
  dispatch(serverRequest());
  changeValue(actionType)
    .then(data => dispatch(success(data.count)))
    .catch(error => dispatch(fail()));
}

export const getInitialValue = () => dispatch => {
  dispatch(serverRequest());
  initialValue()
    .then(data => dispatch(success(data.count)))
    .catch(error => dispatch(fail()));
}
