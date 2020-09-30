/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import {CHANGE_DESC,CHANGE_NAME } from './constants';

export const initialState = {
  name:'',
  desc:'',

};

/* eslint-disable default-case, no-param-reassign */
const DialogAddReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_NAME:
        draft.name = action.name;
        break;
        
      case CHANGE_DESC:
        draft.desc = action.desc;
        break;
    }
  });

export default DialogAddReducer;