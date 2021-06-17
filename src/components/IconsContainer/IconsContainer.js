import React from "react";
import logoutIMG from "../../assets/logout.png";
import homeIMG from "../../assets/home.png";

function IconsContainer() {
  return (
    <div className="iconContainer">
      <a href="#" className="logout">
        <img src={logoutIMG} alt="Wyloguj się" />
      </a>
      <a href="#" className="home">
        <img src={homeIMG} alt="Menu" />
      </a>
    </div>
  );
}

export default IconsContainer;
