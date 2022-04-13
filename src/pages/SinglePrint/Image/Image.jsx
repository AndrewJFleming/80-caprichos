import React from "react";

import "./Image.css";

const Figure = ({ isZoomedIn, image, setIsZoomedIn }) => {
  return (
    <img
      className={`single-image ${isZoomedIn && "enlarged"}`}
      src={isZoomedIn ? image.fullsizeUrl : image.largeUrl}
      alt={`${image.title}, from ${
        isZoomedIn ? "fullsize url" : "large size url"
      }`}
      onClick={() => setIsZoomedIn(!isZoomedIn)}
    />
  );
};

export default Figure;
