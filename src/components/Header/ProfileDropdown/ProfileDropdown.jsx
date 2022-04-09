import React from "react";

import "./ProfileDropdown.css";

const ProfileDropdown = () => {
  return (
    <div className="profile-dropdown-wrapper">
      <ul className="profile-dropdown-list">
        <span className="dropdown-section">
          <li>Peter</li>
          <li>Team Name</li>
        </span>
        <span className="dropdown-section">
          <li>Create a Team</li>
          <li>Edit Profile</li>
        </span>
        <span className="dropdown-section">
          <li>Logout</li>
        </span>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
