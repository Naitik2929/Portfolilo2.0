import React, { useEffect } from "react";
import "./header.css";
import png from "../../assets/me3.png";
import Cnt from "./Cnt";
import Social from "./Social";
const Header = () => {
  useEffect(() => {
    document.title = "Naitik Patel";
  });
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Naitik Patel</h1>
        <h5 className="text-light">Web Developer</h5>
        <Cnt />
        <Social />
        <div className="me">
          <img src={png} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
