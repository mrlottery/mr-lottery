import styled from 'styled-components';

const StyledA = styled.a`
    background-color:#357a38;
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    /*border-radius: 12px;*/
    span{
        padding: 10px;
    }
    &:active {
        border-color: #124116;
        color: #1b5e20;
        border-bottom: 5px solid #124116;
        background-color:#fff;
      }
`;

export default StyledA;
