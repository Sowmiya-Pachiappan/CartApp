import { theme } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const StyledNavLink = styled(Link)`
  color:${(props) =>
    props.type === 'primary' ? props.token.colorPrimary : props.token.colorLink};
  
    &:hover{
    color:
    ${(props) =>
    props.type === 'primary'
      ? props.token.colorPrimaryActive
      : props.token.colorLinkActive};`;
const StyledLink = (props) => {
  const { token } = theme.useToken();

  return <StyledNavLink {...props} token={token}>{props.children}</StyledNavLink>;
};

export default StyledLink;
