import React,{Component} from 'react';
import messages from './messages';
import {connect} from 'react-redux'
import {showUsers} from './actions'
import reducer from './first-reducer'
import { useInjectReducer } from '../../utils/injectReducer';
import { FormattedMessage } from 'react-intl';
const key = 'prube';

export function PrubeScreen(props) {

  useInjectReducer({key,reducer});
  return (
    <div> 
    <h1>react simple starter  </h1> 
    { console.log(props) }
    <ul>
    </ul>
  </div>
    
  );
}

const mapStateToProps = state =>{
  return {
      ctr:state.counter
    };
}

export default connect(mapStateToProps)(PrubeScreen);