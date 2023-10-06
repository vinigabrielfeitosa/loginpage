import React from 'react';
import styled from 'styled-components';
import googleIcon from '../img/icon-google.png';

const GoogleButton = styled.button`
  background-color: #fff;
  color: #555;
  padding: 10px 20px;
  border: 0.2px solid #333;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 85%;
  border-radius: 5px;
  line-height: 1.2;
  margin-top: 15px;
  font-family: 'open sans';
  height: 54px;
  padding-left: 30px;
  padding-right: 30px;
  transition: background-color 1s linear;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #eee;
  }

  @media only screen and (max-width: 650px) {
    width: 95%;
  }
`;

const LoginGButton = ({ label }) => {
  return (
    <GoogleButton type="submit">
      <img src={googleIcon} alt="Google Icon" /> {label}
    </GoogleButton>
  );
};

export default LoginGButton;
