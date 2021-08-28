import React from "react";
import { Button } from "react-bootstrap";
import {
  FiHome,
  FiMessageSquare,
  FiCompass,
  FiHeart,
  FiSettings,
} from "react-icons/fi";
import NaBarooterTile from "./NaBarooterTile";

const NavBar = () => {
  return (
    <>
    <div className="sidenav">
      <div className="logoicon"></div>
      <a href="#section">
        <FiHome size={23} /> Home
      </a>
      <a href="#section">
        <FiMessageSquare size={23} />
        Messages
      </a>
      <a href="#section">
        {" "}
        <FiCompass size={23} className="text-primary"/>
        Discover
      </a>
      <a href="#section">
        {" "}
        <FiHeart size={23} />
        Favourites
      </a>
      <a href="#section">
        {" "}
        <FiSettings size={23} /> Settings
      </a>
      <NaBarooterTile/>
    </div>
    </>
  );
};

export default NavBar;
