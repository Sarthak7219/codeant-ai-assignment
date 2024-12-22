import React from "react";

const SidebarOption = ({ text, Icon, is_selected }) => {
  return (
    <div className={`option ${is_selected ? "selected" : ""}`}>
      <Icon className="icon" />
      <p>{text}</p>
    </div>
  );
};

export default SidebarOption;
