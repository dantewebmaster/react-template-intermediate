import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #222;
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
`;
