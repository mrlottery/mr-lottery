/*
 *
 * HomePage actions
 *
 */

import { DEFAULT_ACTION,ALL_THEMES_LOADED,ALL_THEMES_LOADING ,CREATE_THEME,THEME_CREATED, THEME_UPDATED,UPDATE_THEME,
  ALL_CONCEPTS_LOADED, ALL_CONCEPTS_LOADING,CREATE_CONCEPT,CONCEPT_UPDATED, UPDATE_CONCEPT,CONCEPT_CREATED,CONCEPT_DELETED,DELETE_CONCEPT,BACK_CONCEPTS,VALIDATION,CANCEL} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function validation() {
  return {
    type: VALIDATION,
  };
}

export function cancelValidation() {
  return {
    type: CANCEL,
  };
}

export function loadRepos(user_uid) {
  return {
    type: ALL_THEMES_LOADING,
    user_uid
  };
}

export function allThemesLoaded(themes) {
  return {
    type: ALL_THEMES_LOADED,
    themes,
  };
}

export function conceptsLoading(theme_id) {
  return {
    type: ALL_CONCEPTS_LOADING,
    theme_id
  };
}

export function createTheme(user_uid,name,desc) {
  return {
    type: CREATE_THEME,
    user_uid,
    name,
    desc
  };
}

export function themeCreated() {
  return {
    type: THEME_CREATED,
  };
}

export function updateTheme(theme_id,name,desc,status) {
  return {
    type: UPDATE_THEME,
    theme_id,
    name,
    desc,
    status
  };
}
export function themeUpdated() {
  return {
    type: THEME_UPDATED,
  };
}

export function conceptsLoaded(concepts) {
  return {
    type: ALL_CONCEPTS_LOADED,
    concepts,
  };
}

export function createConcept(themeId,name,desc) {
  return {
    type: CREATE_CONCEPT,
    themeId,
    name,
    desc
  };
}
  
export function conceptCreated() {
  return {
    type: CONCEPT_CREATED,
  };
}

export function updateConcept(conceptId,name,desc) {
  return {
    type: UPDATE_CONCEPT,
    conceptId,
    name,
    desc
  };
}
export function conceptUpdated() {
  return {
    type: CONCEPT_UPDATED,
  };
}

export function deleteConcept(conceptId) {
  return {
    type: DELETE_CONCEPT,
    conceptId
  };
}
export function conceptDeleted() {
  return {
    type: CONCEPT_DELETED,
  };
}

export function conceptBack(){
  return{
    type: BACK_CONCEPTS,
  };
}



