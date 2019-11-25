import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyled, Navigation } from './styles';
import logo from '../../logo.svg';

export default function Header({
  title
}) {
  return (
    <>
      <HeaderStyled>
        <img src={logo} alt="logo" />
        <h1>{title}</h1>
      </HeaderStyled>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </Navigation>
    </>
  )
}
