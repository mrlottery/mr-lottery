import styled from 'styled-components';



const StyledButton = styled.button`
      position: absolute;
      margin-top:2%;
      margin-left:80%;
      background-color: Transparent;
      background-repeat:no-repeat;
      border: none;

      @media (max-width: 650px) {
            margin-left:70%;
      }
`;

export default StyledButton;
