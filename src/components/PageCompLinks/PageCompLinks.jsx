import React from "react";
import { Link } from "react-router-dom";

import "./PageCompLinks.css";

const PageCompLinks = ({ onVertMenu, otherLinks }) => {
  return (
    <React.Fragment>
      {otherLinks?.map((otherLink) => (
        <Link className="dropdown-item-link" to={otherLink.link}>
          <li className={onVertMenu && "page-comp-link-item"}>
            {otherLink.title}
          </li>
        </Link>
      ))}
    </React.Fragment>
  );
};

export default PageCompLinks;
