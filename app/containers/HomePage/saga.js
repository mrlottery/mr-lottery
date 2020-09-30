// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, select, takeLatest,takeEvery } from 'redux-saga/effects';
import { ALL_THEMES_LOADED ,ALL_THEMES_LOADING,CREATE_THEME,THEME_CREATED, ALL_CONCEPTS_LOADING,DELETE_CONCEPT,CONCEPT_DELETED,THEME_UPDATED,UPDATE_THEME, CREATE_CONCEPT, UPDATE_CONCEPT, CONCEPT_UPDATED,BACK_CONCEPTS} from './constants';

import { allThemesLoaded ,loadRepos,themeCreated, conceptsLoaded,themeUpdated, conceptCreated, conceptUpdated, conceptDeleted,conceptBack,validation,cancelValidation} from './actions';
import request from '../../utils/request';

export function* backConcepts(action){
  yield put(conceptBack);
}

export function* cancelDialog(action){
  yield put(cancelValidation);
}
// Individual exports for testing
export function* getAllThemes(action) {
  // See example in containers/HomePage/saga.js
  const requestURL = `https://mrlottery.herokuapp.com/api/tema/all`;
  try {
    // Call our request helper (see 'utils/request')
    const themes = yield call(request, requestURL);
    yield put(allThemesLoaded(themes));
  } catch (err) {
    
  }
}

// Individual exports for testing
export function* getAllThemesById(action) {
  // See example in containers/HomePage/saga.js
  const requestURL = `https://mrlottery.herokuapp.com/api/tema/user/a/?id=${action.user_uid}`;
  //const requestURL = `http://localhost:3301/api/tema/user/a/?id=${action.user_uid}`;
  try {
    // Call our request helper (see 'utils/request')
    const themes = yield call(request, requestURL);
    yield put(allThemesLoaded(themes));
  } catch (err) {
    
  }
}

export function* updateTheme(action){
  const requestURL = `https://mrlottery.herokuapp.com/api/tema/update`;
  if(action.name != '' && action.desc != ''){
    try{
      const themes = yield fetch(requestURL,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({    
          id:action.theme_id,
          tema:action.name,
          description:action.desc,
          status:action.status
        })
      });
      yield put(themeUpdated());
    }catch(err){
    }
  }else{
    yield put(validation());

  }
  
  
}
// Individual exports for testing
export function* createTheme(action) {
  // See example in containers/HomePage/saga.js
  const requestURL = `https://mrlottery.herokuapp.com/api/tema`;
  if(action.name != '' && action.desc != ''){
    try {
      // Call our request helper (see 'utils/request')
   
      const themes = yield fetch(requestURL,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({    
          tema:action.name,
          description:action.desc,
          status: 1,
          user_id:action.user_uid
        })
      });
  
      yield put(themeCreated());
    } catch (err) {
      
    }
  }else{
    yield put(validation());

  }
  
}

export function* getConceptsByTheme(action) {
  const requestURL = `https://mrlottery.herokuapp.com/api/concepto/tema/a/?id=${action.theme_id}`;
  try {
    const concepts = yield call(request, requestURL);
    yield put(conceptsLoaded(concepts));
  } catch (err) {
  }
}

export function* createConcept(action) {
  const requestURL = `https://mrlottery.herokuapp.com/api/concepto`;
  if(action.name != '' && action.desc != ''){
    try {
      const concepts = yield fetch(requestURL,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({    
          tema_id:action.themeId,
          concepto:action.name,
          descripcion:action.desc
        })
      });
      yield put(conceptCreated());
    } catch (err) {
    }
  }else{
    yield put(validation());

  }
  
}

export function* updateConcept(action){
  const requestURL = `https://mrlottery.herokuapp.com/api/concepto/update`;
  if(action.name != '' && action.desc != ''){

    try{
      const concepts = yield fetch(requestURL,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({    
          id:action.conceptId,
          concepto:action.name,
          descripcion:action.desc
        })
      });
      yield put(conceptUpdated());
    }catch(err){
    }
  }else{
    yield put(validation());

  }
  
}

export function* deleteConcept(action) {
  const requestURL = `https://mrlottery.herokuapp.com/api/concepto/delete`;
  try {
    const concepts = yield fetch(requestURL,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({    
        id:action.conceptId        
      })
    });
    yield put(conceptDeleted());
  } catch (err) {
  }
}

export default function* getThemesLifeCycle() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ALL_THEMES_LOADING, getAllThemesById);
  yield takeLatest(CREATE_THEME, createTheme);
  yield takeLatest(ALL_CONCEPTS_LOADING, getConceptsByTheme);
  yield takeLatest(UPDATE_THEME, updateTheme);
  yield takeLatest(CREATE_CONCEPT, createConcept);
  yield takeLatest(UPDATE_CONCEPT, updateConcept);
  yield takeLatest(DELETE_CONCEPT, deleteConcept);
}
