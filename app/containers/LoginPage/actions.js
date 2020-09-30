/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { GOOGLE_LOGIN,CHANGE_USER} from './constants';
import { func } from 'prop-types';
import {auth, googleProvider} from '../../firebase';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */

export const googleLogin = () => {
  return (dispatch, getState) => {
    auth.signInWithPopup(googleProvider).then(() => {
      dispatch({ type: GOOGLE_LOGIN })
    });
  }
}

export function googleLoginAction(user_uid) {
  return {
    type: GOOGLE_LOGIN,
    user_uid,
  };
}

export function changeUser() {
  return {
    type: CHANGE_USER,
  };
}

