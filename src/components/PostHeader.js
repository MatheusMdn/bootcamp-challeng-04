import React from "react";

import logo from "../assets/facebook-1.png";

export default function PostHeader() {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}
