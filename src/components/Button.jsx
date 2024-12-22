import React from "react";

const Button = ({ text, icon_url, primary }) => {
  return (
    <div className={`btn ${primary ? "blue" : ""}`}>
      <img src={icon_url} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default Button;
