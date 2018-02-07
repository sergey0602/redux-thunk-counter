import { SERVER_REQUEST, SUCCESS, FAIL } from '../actions/constants';

const initialState = { count: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case SERVER_REQUEST:
      return Object.assign({}, state, { count: 'Данные загружаются...' });

    case SUCCESS:
      return Object.assign({}, state, { count: action.payload });

    case FAIL:
      return Object.assign({}, state, { count: 'Данные не загрузились' });

    default:
      return state;
  }
};
