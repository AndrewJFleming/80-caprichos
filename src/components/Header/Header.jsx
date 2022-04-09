import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import LogoDark from "../../images/los-caprichos-logo.png";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";
import "./Header.css";

const Header = ({ vertMenuCollapsed, handleVertCollapse }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  return (
    <header ref={ref}>
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
          onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
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
      {isMenuOpen && <ProfileDropdown />}
    </header>
  );
};

export default Header;
