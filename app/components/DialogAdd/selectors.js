import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectDialogAddDomain = state => state.DialogAdd || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

const makeSelectDialogAdd = () =>
  createSelector(
    selectDialogAddDomain,
    substate => substate,
  );

  const makeSelectName = () =>
  createSelector(
    selectDialogAddDomain,
    substate => substate.name,
  );

const makeSelectDesc= () =>
  createSelector(
    selectDialogAddDomain,
    substate => substate.desc,
);



export default selectDialogAddDomain;
export { makeSelectDialogAdd,makeSelectName,makeSelectDesc};
