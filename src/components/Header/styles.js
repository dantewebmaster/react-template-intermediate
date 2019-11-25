import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;

  img {
    width: 140px;
  }

  h1 {
    color: #d7d7d7;
    font-weight: 300;
    font-size: 32px;
    max-width: 300px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  background: #000;
 
  a {
    color: #fff;
    padding: 10px;
    text-decoration: none;

    &:hover {
      color: teal;
    }
  }
`;
