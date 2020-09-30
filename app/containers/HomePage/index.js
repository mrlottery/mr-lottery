/**
 *
 * HomePage
 *
 */

import React, { useEffect,memo, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Loader from 'react-loader-spinner'

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {makeSelectHomePage,makeSelectTheme,makeSelectLoad,makeSelectLoadThemes,
  makeSelectCount,makeSelectThemeCreated,makeSelectName,makeSelectDesc, makeSelectIsTheme, makeSelectcompleteLoad, makeSelectThemeId,makeSelectRefreshConcepts,makeSelectValidation} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {allThemesLoaded,loadRepos,createTheme,conceptsLoading,updateTheme, createConcept, updateConcept, deleteConcept,conceptBack,validation,cancelValidation} from './actions'
import {makeSelectLoged,makeSelectUser} from '../LoginPage/selectors'

import List from '../../components/List'
import Title from '../../components/Title/Title'


import { Redirect, Route } from "react-router";
import DialogAdd from '../../components/DialogAdd';
//import Alert from '../../components/Alert';
import Alert from '@material-ui/lab/Alert';
import RowBack from '@material-ui/icons/KeyboardBackspace';
import { makeStyles } from '@material-ui/core/styles';

import {changeName,changeDesc} from '../../components/DialogAdd/actions'

const key = 'HomePage'

const useStyles = makeStyles(() => ({
  loader: {
    position: "fixed", 
    top: "50%", 
    left: "50%", 
    transform: "translate(-50%, -50%)"
  }
}));

export function HomePage({
  themes,
  getAllThemes,
  onClickCreateTheme,
  themes_load,
  themeCreated,
  load,  
  loged,
  name,
  desc,
  user_uid,
  onNameChange,
  onDescChange,
  count,
  isTheme, 
  getConcepts, 
  completeLoad,
  onClickUpdateThemes,
  themeId,
  onClickCreateConcepts,
  refreshConcepts,
  onClickUpdateConcept,
  onClickDeleteConcept,
  onBackConcept,
  validation,
  onCancel
  }) {
    useInjectReducer({ key, reducer }); 
    useInjectSaga({ key, saga });
    const classes = useStyles();

    useEffect(() => {
      // Actualiza el título del documento usando la API del navegador
      if(!load && loged){
        getAllThemes(user_uid)        
      }
    });
   
    if(validation){
      console.log("true");
      
    }

    if(themeCreated){
      getAllThemes(user_uid)
    }
    if(refreshConcepts){
      getConcepts(themeId);
    }
 
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

  return (
    <div>
      {loged?'':<Redirect to="/" />}
      <Helmet>
        <title>Mr Lottery</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>  
      <Title onBack={onBackConcept} isTheme={isTheme}></Title>

      {completeLoad ? (
        <React.Fragment>
          <List list={themes} isTheme={isTheme} onClickGetConcepts={getConcepts} onClickUpdateThemes={onClickUpdateThemes} 
            onClickUpdateConcept={onClickUpdateConcept} onClickDeleteConcept={onClickDeleteConcept} refreshConcepts={refreshConcepts} 
            changeName={onNameChange} changeDesc={onDescChange} name={name} desc={desc} validation={validation} onCancel={isTheme ? onBackConcept: onCancel}/>
           <DialogAdd onClickAccept={isTheme?()=>onClickCreateTheme(user_uid,name,desc):()=>onClickCreateConcepts(themeId, name, desc)}
            changeName={onNameChange} changeDesc={onDescChange} statusThemeCreated={themeCreated} 
            refreshConcepts={refreshConcepts} title={isTheme ? "Crear tema": "Crear concepto"} validation={validation} onCancel={isTheme ? ()=>onBackConcept(): ()=>onCancel()}/>
          
        </React.Fragment>  
      ) : <Loader
            className = {classes.loader}
            type="BallTriangle"
            color="#357A38"
            height={100}
            width={100}
          />} 
    </div>
    
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  themes:PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  getAllThemes: PropTypes.func,
  onClickCreateTheme: PropTypes.func,
  themes_load:PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  load:PropTypes.bool,
  loged:PropTypes.bool,
  user_uid:PropTypes.string,
  count:PropTypes.number,
  themeCreated:PropTypes.bool,
  name:PropTypes.string,
  desc:PropTypes.string,
  onNameChange: PropTypes.func,
  onDescChange: PropTypes.func,
  isTheme: PropTypes.bool,
  getConcepts: PropTypes.func,
  completeLoad: PropTypes.bool,
  onClickUpdateThemes: PropTypes.func,
  themeId: PropTypes.string,
  onClickCreateConcepts: PropTypes.func,
  refreshConcepts: PropTypes.bool,
  onClickUpdateConcept: PropTypes.func,
  onClickDeleteConcept: PropTypes.func,
  onBackConcept:PropTypes.func,
  validation:PropTypes.bool,
  onCancel:PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  themes:makeSelectTheme(),
  load:makeSelectLoad(),
  themes_load:makeSelectLoadThemes(),
  count:makeSelectCount(),
  loged:makeSelectLoged(),
  user_uid:makeSelectUser(),
  themeCreated:makeSelectThemeCreated(),
  name:makeSelectName(),
  desc:makeSelectDesc(),
  isTheme:makeSelectIsTheme(),
  completeLoad:makeSelectcompleteLoad(),
  themeId:makeSelectThemeId(),
  refreshConcepts:makeSelectRefreshConcepts(),
  validation:makeSelectValidation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getAllThemes: (username_uid) => dispatch(loadRepos(username_uid)) ,
    onClickCreateTheme: (username_uid, name,desc) =>dispatch(createTheme(username_uid, name,desc)),
    onNameChange: evt => dispatch(changeName(evt.target.value)),
    onDescChange: evt => dispatch(changeDesc(evt.target.value)),
    getConcepts: (themeSelectedId) => dispatch(conceptsLoading(themeSelectedId)),
    onClickUpdateThemes: (themeSelectedId,name,desc, status) => dispatch(updateTheme(themeSelectedId,name,desc, status)),
    onClickCreateConcepts: (themeSelectedId, name, desc) => dispatch(createConcept(themeSelectedId,name, desc)),
    onClickUpdateConcept: (conceptSelectedId, name, desc) => dispatch(updateConcept(conceptSelectedId, name, desc)),
    onClickDeleteConcept: (conceptSelectedId) => dispatch(deleteConcept(conceptSelectedId)),
    onBackConcept:() => dispatch(conceptBack()),
    onCancel:() => dispatch(cancelValidation()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
