import { css } from 'styled-components';

const buttonStyles = css`
  background-color:#DB4437;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width:216px;
  height:56px;
  margin: 4px 2px;
  border-radius: 12px;
  span{
      padding: 10px;
  }


  &:active {
    border-color: #DB4437;
    color: #DB4437;
    border-bottom: 5px solid #DB4437;
    background-color:#fff;
  }
`;

export default buttonStyles;
