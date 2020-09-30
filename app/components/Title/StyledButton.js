import styled from 'styled-components';

const StyledButton = styled.button`
      position: absolute;
      right: 93%;
      background-color: Transparent;
      background-repeat:no-repeat;
      border: none;
      color: white;

      @media (max-width: 650px) {
            right:83%;
      }
`;

export default StyledButton;
