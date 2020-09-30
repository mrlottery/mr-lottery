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
import CreateIcon from '@material-ui/icons/Create'; 

function DialogUpdate(props) {
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
      <ButtonStyle rightPx='10px' onClick={handleClickOpen}><CreateIcon style={{fontSize:"35px"}}/></ButtonStyle>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Actualizar {props.title}</DialogTitle>
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
            multiline
            rowsMax={4}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onCancel} color="primary">
            Cancelar
          </Button>
          <Button onClick={props.onClickAcept} color="primary">
            Actualizar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DialogUpdate.propTypes = {};

export default memo(DialogUpdate);
