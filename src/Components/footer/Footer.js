import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <h1>Let's Chat</h1>
      <div className="footer__socials">
        <a
          href="https://linkedin.com/in/naitik-patel-118a1b217/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Naitik2929"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy;Naitik Patel All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
