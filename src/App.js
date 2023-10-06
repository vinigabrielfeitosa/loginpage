import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Inicial from "./pages/inicial/Inicial";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Inicial" element={<Inicial />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
