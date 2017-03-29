import { EMPLOYEE_UPDATE } from '../actions/types';

// handle everything to do with authentication
const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
    console.log('inside reducer');
    console.log(action);
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
