import React from "react";
import { Link } from "react-router-dom";

import "./SubCatItem.css";

const SubCatItem = ({ subCat }) => {
  return (
    <Link className="subcat-list-item-link" to={`/category/${subCat.slug}`}>
      <li className="subcat-list-item" key={subCat.id}>
        {subCat.title}
      </li>
    </Link>
  );
};

export default SubCatItem;
