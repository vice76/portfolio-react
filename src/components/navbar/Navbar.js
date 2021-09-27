import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import logo from "../../assests/Arpit Yadav.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav__mid">
        <img src={logo} alt="Arpit Yadav" />
        <a href="#">work.</a>
        <a href="#">skills.</a>
        <a href="#">say hi!</a>
      </div>
      <div className="nav__right">
        <GitHubIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
};

export default Navbar;
