import React from "react";
import SidebarOption from "./SidebarOption.jsx";
import { ReactComponent as RepositoriesIcon } from "../../assets/icons/repositories.svg";
import { ReactComponent as AICodeReviewIcon } from "../../assets/icons/ai-code-review.svg";
import { ReactComponent as CloudSecurityIcon } from "../../assets/icons/cloud-security.svg";
import { ReactComponent as HowToUseIcon } from "../../assets/icons/how-to-use.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings.svg";
import { ReactComponent as SupportIcon } from "../../assets/icons/support.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout.svg";

const Sidebar = ({ isSidebarActive }) => {
  return (
    <div className={`left ${isSidebarActive ? "active" : ""}`} id="sidebar">
      <div className="dropdown">
        <div className="text">SarthakCodeAntAIAssignment</div>
        <img src="/images/dropdown-arrow.svg" alt="" />
      </div>

      <div className="dropdown-options">
        <SidebarOption
          text="Repositories"
          Icon={RepositoriesIcon}
          is_selected={true}
        />
        <SidebarOption text="AI Code Review" Icon={AICodeReviewIcon} />
        <SidebarOption text="Cloud Security" Icon={CloudSecurityIcon} />
        <SidebarOption text="How To Use" Icon={HowToUseIcon} />
        <SidebarOption text="Settings" Icon={SettingsIcon} />
        <div className="space-fill"></div>
        <SidebarOption text="Support" Icon={SupportIcon} />
        <SidebarOption text="Logout" Icon={LogoutIcon} />
      </div>
    </div>
  );
};

export default Sidebar;
