import React from 'react';
import messages from './messages'
import { FormattedMessage } from 'react-intl';
import { Fab,Icon } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import LinkRel from '../../linkscss'
import Div from './StyledDiv'

function FABButton(props) {
    // Render an anchor tag 
    const{} = props;
    return(
        <Div onClick={props.onClick}>
            <LinkRel/>      
            <Fab color="primary" aria-label="add" size="medium">
                <AddIcon/>
            </Fab>
        </Div>   
    )
  }
export default FABButton;