/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION,ALL_THEMES_LOADED,ALL_THEMES_LOADING ,CREATE_THEME,THEME_CREATED, THEME_UPDATED,UPDATE_THEME,
  ALL_CONCEPTS_LOADED, ALL_CONCEPTS_LOADING,CREATE_CONCEPT,CONCEPT_UPDATED, UPDATE_CONCEPT,CONCEPT_CREATED,CONCEPT_DELETED,DELETE_CONCEPT,BACK_CONCEPTS,VALIDATION,CANCEL} from './constants';
import { CHANGE_DESC,CHANGE_NAME} from '../../components/DialogAdd/constants'

export const initialState = {
  load:false,
  count:0,
  themeCreated:false,
  themes:{
    repositories:false,
  },
  name:'',
  desc:'',
  c:[],
  isTheme:true,
  concepts:{
    repositories:false,
  },
  loadConcepts: false,
  themeId: '',
  completeLoad: false,
  conceptId: '',
  refreshConcepts: false,
  textValidation: false,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ALL_THEMES_LOADING:
        draft.themes.repositories = false;
        draft.load = true;
        draft.themeCreated = false;
        draft.completeLoad = false;
        break;

      case ALL_THEMES_LOADED:
        draft.themes.repositories =action.themes;    
        draft.c = action.themes;
        draft.load = true;
        draft.themeCreated = false;
        draft.isTheme = true;
        draft.completeLoad = true;
        break;

      case CREATE_THEME:
        draft.isTheme = true;
        draft.textValidation = false;
        break;

      case VALIDATION:
        draft.textValidation = true;
        break;

      case CANCEL:
        draft.textValidation = false;
        draft.refreshConcepts = true;
        draft.isTheme = false;
        break;

      case BACK_CONCEPTS:
        draft.isTheme = true;
        draft.themeCreated = true;
        draft.textValidation = false;
        break;

      case THEME_CREATED:
        draft.themeCreated = true;
        draft.name = '';
        draft.desc = '';       
        break;

      case UPDATE_THEME: 
        break;

      case THEME_UPDATED:
        draft.themeCreated = true;
        draft.textValidation = false;    
        break;

      case ALL_CONCEPTS_LOADING:
        draft.themeId = action.theme_id;
        draft.completeLoad = false;
        break;

      case ALL_CONCEPTS_LOADED:
        draft.isTheme = false;
        draft.themes.repositories =action.concepts;
        draft.completeLoad = true;
        draft.refreshConcepts = false;
        break;

      case CREATE_CONCEPT:
        draft.isTheme = false;
        break;
  
      case CONCEPT_CREATED:
        draft.refreshConcepts = true;
        draft.textValidation = false;
        draft.name = '';
        draft.desc = '';       
        break;

      case UPDATE_CONCEPT: 
        break;

      case CONCEPT_UPDATED:
        draft.refreshConcepts = true;
        draft.textValidation = false;    
        break;
      
      case DELETE_CONCEPT: 
        break;

      case CONCEPT_DELETED:
        draft.refreshConcepts = true;      
        break;
      
      case CHANGE_NAME:
        draft.name = action.name;
        break;
           
      case CHANGE_DESC:
        draft.desc = action.desc;
        break;
          
    }
  });

export default homePageReducer;
