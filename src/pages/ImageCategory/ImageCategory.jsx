import React from "react";
import { useParams } from "react-router-dom";

import { categoryData } from "../../data.js";
import "./ImageCategory.css";

const ImageCategory = () => {
  const { catId } = useParams();
  return (
    <div className="page-comp-wrapper">
      {categoryData[0].subCats
        .filter((cat) => cat.slug === catId)
        .map((cat) => (
          <h1>{cat.title}</h1>
        ))}
    </div>
  );
};

export default ImageCategory;
