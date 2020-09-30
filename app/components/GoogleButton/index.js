import React from 'react';
import './bootstrap-social.css';
import StyledButton from './StyledButton'
import StyledA from './A'
import messages from './messages'
import { FormattedMessage } from 'react-intl';

function GoogleButton(props) {
    // Render an anchor tag 
    const{googleLogin} = props;
    return(
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>           
                <StyledA href="#" onClick={googleLogin}>
                    <span  className="fa fa-google"/>       
                    <FormattedMessage {...messages.home} /> 
                </StyledA>
                  
        </div>
   
    )
  }
export default GoogleButton;