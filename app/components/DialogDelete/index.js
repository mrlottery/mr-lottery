/**
 *
 * DialogDelete
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

//import { FormattedMessage } from 'react-intl';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '../FloatButton'
import ButtonStyle from './StyledButton';
import DeleteIcon from '@material-ui/icons/Delete'; 

function DialogDelete(props) {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if((props.statusThemeCreated || props.refreshConcepts) && open){
    setOpen(false);
  }
  return (
    <div>
      <ButtonStyle rightPx='10px' onClick={handleClickOpen}><DeleteIcon style={{fontSize:"35px"}}/></ButtonStyle>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
  <DialogTitle id="form-dialog-title">Eliminar {props.title}</DialogTitle>
        <DialogContent>
          {<DialogContentText>
            Esta seguro que desea eliminar el {props.title}
          </DialogContentText>}
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={props.onClickAcept} color="primary">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DialogDelete.propTypes = {};

export default memo(DialogDelete);
