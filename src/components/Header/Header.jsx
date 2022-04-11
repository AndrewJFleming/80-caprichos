import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import LogoDark from "../../images/los-caprichos-logo.png";
import DonkeyLogo from "../../images/donkey-logo, duotone.svg";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";
import PageCompLinks from "./PageCompLinks/PageCompLinks";
import "./Header.css";

const Header = ({ otherLinks, vertMenuCollapsed, handleVertCollapse }) => {
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
        <div className="page-comp-links">
          <PageCompLinks otherLinks={otherLinks} />
        </div>
        <img
          className="profile-avatar"
          onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
          src={DonkeyLogo}
          alt="80 Caprichos alternative donkey head logo."
        />
        <div className="close-button-wrapper" onClick={handleVertCollapse}>
          {vertMenuCollapsed ? (
            <i class="fas fa-bars close-button-icon"></i>
          ) : (
            <i class="fas fa-times close-button-icon"></i>
          )}
        </div>
      </nav>
      {isMenuOpen && <ProfileDropdown otherLinks={otherLinks} />}
    </header>
  );
};

export default Header;
