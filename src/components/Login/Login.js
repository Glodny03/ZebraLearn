import React from "react";

function Login() {
  return (
    <div className="loginPanel">
      <input type="text" placeholder="E-mail" />
      <input type="password" placeholder="Hasło" />
      <a href="#">Zapomniałeś hasła?</a>
      <button>
        <a href="/home">Zaloguj</a>
      </button>
      <button>Zarejestruj</button>
    </div>
  );
}

export default Login;
