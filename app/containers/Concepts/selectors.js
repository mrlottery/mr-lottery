import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the concepts state domain
 */

const selectConceptsDomain = state => state.concepts || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Concepts
 */

const makeSelectConcepts = () =>
  createSelector(
    selectConceptsDomain,
    substate => substate,
  );

  
const makeSelectListConcepts = () =>
  createSelector(
    selectConceptsDomain,
    substate => substate.listConcepts,
  );

const makeSelectDeleteValConcept = () =>
  createSelector(
    selectConceptsDomain,
    substate => substate.val,
  );

export default makeSelectConcepts;
export { selectConceptsDomain ,makeSelectListConcepts,makeSelectDeleteValConcept};
