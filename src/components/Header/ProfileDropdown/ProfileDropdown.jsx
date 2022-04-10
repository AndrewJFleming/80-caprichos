import React from "react";
import { Link } from "react-router-dom";

import "./ProfileDropdown.css";

const ProfileDropdown = () => {
  return (
    <div className="profile-dropdown-wrapper">
      <ul className="profile-dropdown-list">
        <span className="dropdown-section">
          <Link className="dropdown-item-link" to="/about">
            <li>About</li>
          </Link>
          <Link className="dropdown-item-link" to="/contact">
            <li>Contact</li>
          </Link>
        </span>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
