/**
 *
 * DialogAdd
 *
 */

import React, { useEffect,memo, Component } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';



import { FormattedMessage } from 'react-intl';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import messages from './messages';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '../FloatButton';
//import Alert from '@material-ui/lab/Alert';
import Alert from '../../components/Alert';

export default function DialogAdd(props) {

  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };
  const closeValidation =()=>{
    props.onCancel
  }
  if((props.statusThemeCreated || props.refreshConcepts) && open){
    setOpen(false);
  }
  return (
    <div>
      <Fab onClick={handleClickOpen}/>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      
      <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          {/*<DialogContentText>
            Lorem
          </DialogContentText>*/}
          <TextField
            error={props.validation}
            helperText="Campo obligatorio"
            variant="outlined"
            onChange={props.changeName}
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            fullWidth
            required
          />   
          <TextField
            error={props.validation}
            helperText="Campo obligatorio"
            variant="outlined"
            onChange={props.changeDesc}
            //autoFocus
            margin="dense"
            id="desc"
            label="Descripción"
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onCancel} color="primary">
            Cancelar
          </Button>
          <Button onClick={props.onClickAccept} color="primary">
            Crear
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


