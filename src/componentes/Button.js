import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 85%;
  margin-top: 25px;
  height: 47px;
  font-family: open sans;
  transition: background-color 1s linear;

  &:hover {
    background-color: black;
  }

  @media only screen and (max-width: 650px) {
    width: 95%;
  }
`;

const LoginButton = ({ label }) => {
  return <StyledButton type="submit">{label}</StyledButton>;
};

export default LoginButton;
