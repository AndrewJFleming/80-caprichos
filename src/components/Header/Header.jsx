import React from "react";
import { Link } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";

import LogoDark from "../../images/los-caprichos-logo.png";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";
import "./Header.css";

const Header = ({ vertMenuCollapsed, handleVertCollapse }) => {
  const { ref, isVisible, setIsVisible } = useClickOutside(false);

  return (
    <header>
      <nav className="top-nav">
        <Link className="header-branding-link" to="/">
          <img
            className="header-logo"
            src={LogoDark}
            alt="hostwinds logo dark variant"
          />
        </Link>
        <div
          className="profile-avatar"
          ref={ref}
          onClick={() => setIsVisible(!isVisible)}
        >
          <li className="profile-avatar-inner">P</li>
        </div>
        <div className="close-button-wrapper" onClick={handleVertCollapse}>
          {vertMenuCollapsed ? (
            <i class="fas fa-bars close-button-icon"></i>
          ) : (
            <i class="fas fa-times close-button-icon"></i>
          )}
        </div>
      </nav>
      {isVisible && <ProfileDropdown myRef={ref} />}
    </header>
  );
};

export default Header;
