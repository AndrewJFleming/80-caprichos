import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// import { categoryData } from "../../data.js";
import "./ImageCategory.css";

const ImageCategory = () => {
  const [singleImage, setSingleImage] = useState({});
  const location = useLocation();
  const catId = location.pathname.split("/")[2];

  //   useEffect(() => {
  //     //Identify image with slug value matching image id.
  //     setSingleImage(imageData.find((image) => image.id === imageId));
  //   }, []);
  return <div>Cat</div>;
};

export default ImageCategory;
