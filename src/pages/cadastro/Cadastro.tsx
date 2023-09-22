import React from "react";
import "../../App.css";
import StyledButton from "../../componentes/Button";
import GoogleButton from "../../componentes/Buttongoogle";
import { SignupPage } from "../../componentes/Input";

const Cadastro = () => {
  return (
    <div className="login-page">
      <div className="image-section"></div>
      <div className="login-section">
        <form className="login-form" action="/cadastro" method="post">
          <div className="aviso">
            <h2 className="plogdin">Cadastro</h2>
            <p>Crie sua conta</p>
          </div>
          <div className="input-container">
            <SignupPage/>
          </div>
          <StyledButton label="Cadastrar" />
          <span className="or-separator">ou</span>
          <GoogleButton
           label="Entrar com google" />
          <div className="section-sign">
            <a className="forgot-password" href="/Login">
              Já tem conta? Faça login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
