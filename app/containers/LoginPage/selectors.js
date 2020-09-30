import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectLoginPageDomain = state => state.LoginPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

const makeSelectLoginPage = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate,
  );

  const makeSelectLoged = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.loged,
  );

const makeSelectUser = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.user_uid,
);



export default selectLoginPageDomain;
export { makeSelectLoginPage,makeSelectLoged,makeSelectUser};
