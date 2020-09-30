import React from 'react';
import ButtonStyle from './StyledButton'
import RowBack from '@material-ui/icons/KeyboardBackspace';
import DialogAdd from '../DialogAdd'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    title: {
      padding: "8px",
      textAlign: "center",
      backgroundColor: "#4CAF50",
      color: "white",
      width: "100%"
    }
  }));

const title = (props) => {
    const classes = useStyles();
    return(
        <div className = {classes.title}>
            
            <h2>
                {props.isTheme? "Temas": "Conceptos"}
                {props.isTheme? null : <ButtonStyle onClick={props.onBack}><RowBack style={{fontSize:"30px"}}/></ButtonStyle>}
                
            </h2>
            
        </div>
    );
}

export default title;