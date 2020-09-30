/*
 *
 * Concepts actions
 *
 */

import { DEFAULT_ACTION, GET_CONCEPTS ,DELETE_CONCEPT,LOADED_CONCEPTS} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getConceptsAction() {
  return {
    type: GET_CONCEPTS,
  };
}

export function loadConceptsAction(listConcepts) {
  return {
    type: LOADED_CONCEPTS,
    listConcepts,
  };
}

export function deleteConceptAction() {
  return {
    type: DELETE_CONCEPT,
  };
}