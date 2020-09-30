/**
 *
 * Concepts
 *
 */

import React,  { useEffect,memo, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import {makeSelectListConcepts,makeSelectDeleteValConcept} from './selectors';
import {getConceptsAction} from './actions'
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Concepts({listConcepts, val,getConcepts, deleteConcepts}) {
  useInjectReducer({ key: 'concepts', reducer });
  useInjectSaga({ key: 'concepts', saga });
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    getConcepts()
  });
  return (
    
    <div>
      <Helmet>
        <title>Concepts</title>
        <meta name="description" content="Description of Concepts" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Concepts.propTypes = {
  dispatch: PropTypes.func.isRequired,
  listConcepts:PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  val:PropTypes.number,
  getConcepts: PropTypes.func,
  deleteConcepts: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  listConcepts:makeSelectListConcepts(),
  val:makeSelectDeleteValConcept(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getConcepts: (evt) => dispatch(getConceptsAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Concepts);
