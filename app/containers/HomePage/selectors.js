import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.HomePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate,
  );

  const makeSelectTheme = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.themes.repositories,
  );

  const makeSelectLoad = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.load,
  );

  const makeSelectLoadThemes = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.c,
  );

  const makeSelectCount = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.count,
  );

  
const makeSelectThemeCreated = () =>
createSelector(
  selectHomePageDomain,
  substate => substate.themeCreated,
);

const makeSelectName = () =>
createSelector(
  selectHomePageDomain,
  substate => substate.name,
);

const makeSelectDesc= () =>
createSelector(
  selectHomePageDomain,
  substate => substate.desc,
);

const makeSelectIsTheme= () =>
createSelector(
  selectHomePageDomain,
  substate => substate.isTheme,
);

const makeSelectcompleteLoad= () =>
createSelector(
  selectHomePageDomain,
  substate => substate.completeLoad,
);

const makeSelectThemeId= () =>
createSelector(
  selectHomePageDomain,
  substate => substate.themeId,
);

const makeSelectRefreshConcepts= () =>
createSelector(
  selectHomePageDomain,
  substate => substate.refreshConcepts,
);

const makeSelectValidation= () =>
createSelector(
  selectHomePageDomain,
  substate => substate.textValidation,
);

export default makeSelectHomePage;
export { selectHomePageDomain,makeSelectThemeCreated,
  makeSelectTheme,makeSelectLoad,makeSelectLoadThemes ,
  makeSelectCount,makeSelectName,makeSelectDesc, 
  makeSelectIsTheme, makeSelectcompleteLoad, makeSelectThemeId, makeSelectRefreshConcepts,makeSelectValidation};
