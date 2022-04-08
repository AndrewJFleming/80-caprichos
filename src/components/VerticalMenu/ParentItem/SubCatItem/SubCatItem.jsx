import React from "react";
import { Link } from "react-router-dom";

import "./SubCatItem.css";

const SubCatItem = ({ subcat }) => {
  return (
    <Link className="subcat-list-item-link" to={subcat.link}>
      <li className="subcat-list-item" key={subcat.id}>
        {subcat.title}
      </li>
    </Link>
  );
};

export default SubCatItem;
