import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/los-caprichos-logo, dark.png";
import PageCompLinks from "../PageCompLinks/PageCompLinks";
import ParentItem from "./ParentItem/ParentItem";
import "./VerticalMenu.css";
const VerticalMenu = ({
  otherLinks,
  categories,
  vertMenuCollapsed,
  backgroundColor,
  handleVertCollapse,
}) => {
  return (
    <div
      className={`vert-menu-wrapper ${vertMenuCollapsed && `collapsed`}`}
      style={{ backgroundColor: `${backgroundColor || "black"}` }}
    >
      <Link className="branding-wrapper-link" to="/">
        <img className="site-logo" src={Logo} alt="site branding" />
      </Link>
      <nav>
        <ul>
          {categories.map((cat) => (
            <ParentItem
              cat={cat}
              key={cat.id}
              handleVertCollapse={handleVertCollapse}
            />
          ))}
          {otherLinks && (
            <div className="other-link-wrapper">
              <PageCompLinks onVertMenu={true} otherLinks={otherLinks} />
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default VerticalMenu;
