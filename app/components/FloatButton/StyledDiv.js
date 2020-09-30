import styled from 'styled-components';

const div = styled.div`
    position: fixed;
    left: 90%;
    transition: all 0.2s ease-in 0s;//this is the key attribute
    z-index: 9999;
    cursor: pointer;
    top:88%;

    @media (max-width: 650px) {
        left:80%;
    }
`;

export default div;
