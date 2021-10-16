import React, { useState } from "react";
//Assets
import SiteLogo from "../Assets/SiteLogo.png";
import { FaBars, FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
//Context
import { useGlobalContext } from "../Context/Context";
//Routing
import { NavLink } from "react-router-dom";
//Styles
import { Nav_center, OverallNavbar } from "./NavbarElements";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const btnText = e.target.textContent;
    const btnPos = e.target.getBoundingClientRect();
    const btnCenter = (btnPos.left + btnPos.right) / 2;
    const btnBottom = btnPos.bottom - 3;
    openSubmenu(btnText, { btnCenter, btnBottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={SiteLogo} />
          <button className="btnTgl toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li className="link-btn" >
            home
          </li>
          <li className="link-btn">
            about us
          </li>
          <li className="link-btn" onMouseOver={displaySubmenu}>
            resources
          </li>
          <li className="link-btn">
            suggestion
          </li>
          <li className="link-btn" onMouseOver={displaySubmenu}>
            opportunities
          </li>
          <li className="link-btn">
          <FaSearch />
          </li>
          <li className="link-btn">
          |
          </li>
          <button className="btnGS GS-btn">Get Started</button>
          <button className="btn signin-btn">Sign In</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
