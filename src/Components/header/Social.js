import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Social = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/naitik-patel-118a1b217/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Naitik2929">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/__.naitikk.__007/">
        <BsInstagram />
      </a>
    </div>
  );
};

export default Social;
