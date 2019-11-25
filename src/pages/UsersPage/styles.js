import styled from 'styled-components';

export const UsersList = styled.ul`
  list-style-type: none;
  padding: 18px;
`;

export const User = styled.li`
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  margin-bottom: 8px;
  border-radius: 30px 4px 4px 30px;

  img {
    border-radius: 100%;
    margin-right: 8px;
  }
`;

export const ErrorMessage = styled.div`
  background: red;
  color: #fff;
  border-radius: 4px;
  position: fixed;
  bottom: 45px;
  left: 50%;
  padding: 16px;
  width: 300px;
  margin-left: -150px;
`;
