/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect,memo, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import CenteredSection from './CenteredSection';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Button from '../../components/Button';
import GoogleButton from '../../components/GoogleButton'
import {auth, googleProvider} from '../../firebase';


import {makeSelectLoged,makeSelectUser} from './selectors'


import { googleLogin, googleLoginAction ,changeUser} from './actions'
import reducer from './reducer'

import DIV from './divBackground'
import H1 from './H1'
import { Redirect, Route } from "react-router";

const key = 'LoginPage'

export function LoginPage({
  onClickButtonLogin,
   onClickButton, 
   loged,
   user}) {
  useInjectReducer({ key, reducer })

  return (    
    <DIV >
      <CenteredSection style={{backgroundColor:"#000"}}>  
        <H1>
          <FormattedMessage {...messages.header} />          
        </H1>     
        <GoogleButton googleLogin={onClickButtonLogin}/>     
      </CenteredSection>
      {loged?<Redirect to="/home/" />: ''}
    </DIV>
    
  );
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loged:PropTypes.bool,
  user:PropTypes.string,
  onClickButtonLogin: PropTypes.func,
  onClickButton: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loged:makeSelectLoged(),
  user:makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    //onClickButtonLogin: evt => dispatch(googleLogin()),
    onClickButtonLogin: evt =>  auth.signInWithPopup(googleProvider).then((result) => {
      dispatch(googleLoginAction(result.user.uid))
    }),
    onClickButton: evt => dispatch(changeUser()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,

);

export default compose(
  withConnect,
  memo,
)(LoginPage);

