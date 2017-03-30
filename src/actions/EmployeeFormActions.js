import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from './types';

export const propChanged = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE });
    });
    Actions.empList({ type: 'reset' });
  };
};

export const employeeFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/employees`)
    // persistant, whenever snapshot is changed at this ref, this callback will execute again
    .on('value', snapshot => {
      dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  return (dispatch) => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
    .set({ name, phone, shift })
    .then(() => {
      Actions.empList({ type: 'reset' });
      dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
    });
  };
};

export const employeeDelete = ({ uid }) => {
  return () => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
    .remove()
    .then(() => {
      Actions.empList({ type: 'reset' });
    });
  };
};
