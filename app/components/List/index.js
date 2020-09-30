import React from 'react';
import StyledTable from './StyledTable'
import messages from './messages'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DialogDelete from '../DialogDelete';
import DialogUpdate from '../DialogUpdate';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      width:"80%",
    },
    content: {
      flex: '1 0 auto',

    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    p: {
      position: "fixed", 
      top: "50%", 
      left: "50%", 
      transform: "translate(-50%, -50%)",
      color: "#000"
    }
  }));
export default function List(props) {
  const classes = useStyles();
  const theme = useTheme();
  const list = props.list;
  const isTheme = props.isTheme;
  const titleNotContent = isTheme? "No hay temas creados" : "No hay conceptos creados";
  const titleCard = isTheme? "tema" : "concepto";  
  return(
    <div>
      {
        list.length > 0 ?(<StyledTable >
          {list.map(item => (                    
            <tr key={item._id}>    
              <td>
                <DialogUpdate onClickAcept={isTheme?() => props.onClickUpdateThemes(item._id,props.name,props.desc, 1):()=> props.onClickUpdateConcept(item._id,props.name,props.desc)} validation={props.validation} 
                  changeName={props.changeName} changeDesc={props.changeDesc} title = {titleCard} refreshConcepts = {props.refreshConcepts} onCancel={()=> props.onCancel()}/>                   
                <DialogDelete onClickAcept={isTheme? ()=>props.onClickUpdateThemes(item._id,item.tema,item.description, 0) :() => props.onClickDeleteConcept(item._id)} title={titleCard} validation={props.validation}/> 
                
                <Card className={classes.root} >
                  <div className={classes.details} onClick={() => isTheme?props.onClickGetConcepts(item._id):null}>
                      <CardContent className={classes.content} >
                      <Typography component="h5" variant="h5">
                          {isTheme? item.tema : item.concepto} 
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {isTheme? item.description : item.descripcion }
                      </Typography>
                      </CardContent>
                  </div>
                </Card>    
              </td>                        
            </tr>
          ))}
        </StyledTable>):(<StyledTable>
              <h1 className={classes.p}>{titleNotContent} </h1>
          </StyledTable>)          
      }
    </div>  
  )
}

