import React, { useState } from "react";
import SubCatItem from "./SubCatItem/SubCatItem";

import "./ParentItem.css";

const ParentItem = ({ cat, handleVertCollapse }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    if (cat.collapsible) {
      setIsCollapsed(!isCollapsed);
    }
  };
  return (
    <div className="parent-list-item-wrapper">
      <li
        className={`parent-list-item ${
          cat.collapsible && "collapsible-parent-item"
        }`}
        key={cat.id}
        onClick={handleCollapse}
      >
        <i class="fas fa-cloud vert-menu-item-icon"></i>
        <span className="parent-list-item-text">{cat.title}</span>
        {cat.collapsible && (
          <i class="fal fa-angle-down vert-menu-item-angle"></i>
        )}
      </li>
      {cat.subcats && (
        <ul
          className={`subcat-unordered-list ${isCollapsed ? "collapsed" : ""}`}
        >
          {cat.subcats.map((subcat) => (
            <SubCatItem
              key={subcat.id}
              subcat={subcat}
              handleVertCollapse={handleVertCollapse}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ParentItem;
