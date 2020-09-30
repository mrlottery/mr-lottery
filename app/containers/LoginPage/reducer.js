/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import { GOOGLE_LOGIN,CHANGE_USER } from './constants';

export const initialState = {
  loged:false,
  user_uid:'',

};

/* eslint-disable default-case, no-param-reassign */
const LoginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GOOGLE_LOGIN:
        draft.loged = true;
        draft.user_uid = action.user_uid;
        break;
        
      case CHANGE_USER:
        draft.user_uid = action.user_uid;
        break;
    }
  });

export default LoginPageReducer;
