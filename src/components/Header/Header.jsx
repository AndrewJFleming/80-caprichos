import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import LogoDark from "../../images/los-caprichos-logo.png";
import DonkeyLogo from "../../images/donkey-logo, duotone.svg";
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
            alt="80 Caprichos logo dark variant"
          />
        </Link>
        {/* <div
          className="profile-avatar"
          onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
        >
          <span className="profile-avatar-inner">P</span>
        </div> */}

        <img
          className="profile-avatar"
          onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
          // src="https://gist.githubusercontent.com/AndrewJFleming/4e0a797c8db8da6bb94a170b2ad6d2c1/raw/cf4f7d504b27eadb3fc5fa8984976e2f1aaf5d91/donkey-logo.svg"
          src={DonkeyLogo}
        />

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
