import React from "react";

import PageCompLinks from "../PageCompLinks/PageCompLinks";

import "./ProfileDropdown.css";

const ProfileDropdown = ({ otherLinks }) => {
  return (
    <div className="profile-dropdown-wrapper">
      <ul className="profile-dropdown-list">
        <span className="dropdown-section">
          <PageCompLinks otherLinks={otherLinks} />
        </span>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
