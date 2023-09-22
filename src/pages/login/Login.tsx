import React from "react";
import "../../App.css";
import StyledButton from "../../componentes/Button";
import GoogleButton from "../../componentes/Buttongoogle";
import { LoginPage } from "../../componentes/Input";

const Login = () => {
  return (
    <div className="login-page">
      <div className="image-section"></div>
      <div className="login-section">
        <form className="login-form" action="/Login" method="post">
          <div className="aviso">
            <h2>Plataforma</h2>
            <h2 className="plogin">Login</h2>
            <p>Bem vindo! Insira seu cadastro</p>
          </div>
          <div className="input-container">
          <LoginPage/>  
            <a className="forgot-password" href="/Cadastro">
              Esqueci senha
            </a>
          </div>
          <StyledButton label="Entrar" />
          <span className="or-separator">ou</span>
          <GoogleButton
           label="Entrar com google" />
          <div className="section-sign">
          <a className="forgot-password" href="/Cadastro">
            Ainda nao tem conta? Cadastre-se
          </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
