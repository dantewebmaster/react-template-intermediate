import React from 'react';
import logo from '../../logo.svg';
import { HeaderStyled } from './styles';

export default function Header({
  title
}) {
  return (
    <HeaderStyled>
      <img src={logo} alt="logo" />
      <h1>{title}</h1>
    </HeaderStyled>
  )
}
