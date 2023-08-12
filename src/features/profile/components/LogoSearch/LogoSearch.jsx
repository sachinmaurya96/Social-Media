import React from "react";
import "./LogoSearch.css";
import Logo from "../../../../img/logo.png"
import { FiSearch } from "react-icons/fi";
function LogoSearch() {
  return (
    <div className="LogoSearch">
    <img src={Logo} alt="" />
    <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s__icon">
            <FiSearch/>
        </div>
    </div>
    </div>
  );
}

export default LogoSearch;
