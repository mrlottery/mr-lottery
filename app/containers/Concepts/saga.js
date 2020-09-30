// import { take, call, put, select } from 'redux-saga/effects';

import {GET_CONCEPTS} from './constants'
import {getConceptsAction,loadConceptsAction} from './actions'
import { call, put, select, takeLatest,takeEvery } from 'redux-saga/effects';

export function* getConcepts(action){
  // See example in containers/HomePage/saga.js
  const requestURL = `https://mrlottery.herokuapp.com/api/tema/findB`;

  try {
    // Call our request helper (see 'utils/request')
 
    const concepts = yield fetch(requestURL,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({    
        _id:"5cefea1f9d060a0017f83f13",
        nombre:"hola",
      })
    }) .then(function(response) {

     
    });

   // yield put(loadConceptsAction(concepts))
    
  } catch (err) {
    
  }
}


// Individual exports for testing
export default function* conceptsSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_CONCEPTS, getConcepts);
}
