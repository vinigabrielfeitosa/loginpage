import React from 'react';
import styled from 'styled-components';

interface InputProps {
  placeholder: string;
  type?: string; // Adicionamos a propriedade "type" para definir o tipo do input (por padrão é "text")
}

const StyledInput = styled.input<InputProps>`
  width: 85%;
  margin-top: 15px;
  background: transparent;
  padding: 15px;
  border: none;
  font-weight: 600;
  font-size: 18px;
  height: 45px;
  border-bottom: 2px solid #D4D4D4;

  &[value="John Doe"] {
    border-color: blue;
  }
`;

export const LoginPage = () => {
  return (
    <div className="login-container">
      <StyledInput placeholder="Email" />
      <StyledInput placeholder="Senha" type="password" />
    </div>
  );
};

export const SignupPage = () => {
  return (
    <div className="signup-container">
      <StyledInput placeholder="Nome de Usuário" />
      <StyledInput placeholder="Email" />
      <StyledInput placeholder="Confirmar Email" />
      <StyledInput placeholder="Senha" type="password" />
      <StyledInput placeholder="Confirmar Senha" type="password" />
    </div>
  );
};