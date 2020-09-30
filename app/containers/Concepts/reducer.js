/*
 *
 * Concepts reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, GET_CONCEPTS,DELETE_CONCEPT,LOADED_CONCEPTS } from './constants';

export const initialState = {
  listConcepts:[],
  val:0
};

/* eslint-disable default-case, no-param-reassign */
const conceptsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GET_CONCEPTS:
         //draft.listConcepts = action.listConcepts;
        break;
      case LOADED_CONCEPTS:
          draft.listConcepts = action.listConcepts;
          draft.val = 77;
         break;
      case DELETE_CONCEPT:
          draft.val = state.val +1;
        break;
    }
  });

export default conceptsReducer;
