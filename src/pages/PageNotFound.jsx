import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="not-found-page">
      <h3>Page Not Found</h3>
      <NavLink to="/" style={{ color: "#007bff", marginTop: "6px" }}>
        Back to Home
      </NavLink>
    </div>
  );
};

export default PageNotFound;
