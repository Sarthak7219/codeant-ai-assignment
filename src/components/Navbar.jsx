import React from "react";

const Navbar = ({ isSidebarActive, toggleSidebar }) => {
  return (
    <div className="nav">
      <img src="/images/logo.svg" alt="" className="logo" />
      <div className="toggle" onClick={toggleSidebar}>
        <img
          src="/images/hamburger.svg"
          alt=""
          style={{ display: isSidebarActive ? "none" : "block" }}
        />
        <img
          src="/images/cross.svg"
          alt=""
          style={{ display: isSidebarActive ? "block" : "none" }}
        />
      </div>
    </div>
  );
};

export default Navbar;
