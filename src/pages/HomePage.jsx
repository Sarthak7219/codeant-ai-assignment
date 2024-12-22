import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      style={{
        padding: "30px",
        display: "flex",
        gap: "20px",
        color: "#007bff",
        fontSize: "20px",
      }}
    >
      <NavLink to={"/repositories"}>Repositories Page</NavLink>
      <NavLink to={"/signin"}>SignIn Page</NavLink>
    </div>
  );
};

export default HomePage;
