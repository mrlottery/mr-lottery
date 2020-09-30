import { css } from 'styled-components';

const StyledTable = css`
 
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;

  
  td,  th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  tr:nth-child(even){background-color: #f2f2f2;}
  
  tr:hover {background-color: #ddd;}
  
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
  }
`;

export default StyledTable;


