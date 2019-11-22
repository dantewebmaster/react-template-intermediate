import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;

  form {
    width: 600px;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    input {
      width: 200px;
      border-radius: 30px 0 0 30px;
      height: 40px;
      border: 0;
      padding-left: 16px;
      font-size: 16px;
    }

    button {
      background-color: teal;
      color: #fff;
      text-transform: uppercase;
      border-radius: 0 30px 30px 0;
      height: 42px;
      border: 0;
      padding: 0 16px;
      font-size: 14px;
    }
  }

  p {
    font-size: 18px;
    
    span {
      color: teal;
    }
  }
`;
