import React from "react";
import "./nav.css";

import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { useState } from "react";
const nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <BiUserCircle />
      </a>
      <a href="#project">
        <BiBook />
      </a>
      <a href="#contact">
        <IoMdContact />
      </a>
    </nav>
  );
};

export default nav;
