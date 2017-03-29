import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_USER } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    // when about to login
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => loginSuccessful(dispatch, user), () => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => loginSuccessful(dispatch, user), () => loginFailed(dispatch));
    });
  };
};

const loginFailed = (dispatch) => {
  dispatch({ type: LOGIN_FAILED });
};

const loginSuccessful = (dispatch, user) => {
  dispatch({ type: LOGIN_SUCCESS, payload: user });
  Actions.main();
};
