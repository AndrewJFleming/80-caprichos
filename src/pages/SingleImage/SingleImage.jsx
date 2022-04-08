import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Container } from "react-bootstrap";
import { imageData } from "../../data.js";
import "./SingleImage.css";

const SingleImage = () => {
  const [singleImage, setSingleImage] = useState({});
  const location = useLocation();
  const imageId = location.pathname.split("/")[2];

  useEffect(() => {
    //Identify image with slug value matching image id.
    setSingleImage(imageData.find((image) => image.id === imageId));
  }, []);

  return (
    <div className="single-page-wrapper">
      <Container>
        <div className="single-image-wrapper">
          <img
            className="single-image-fullsize"
            src={singleImage?.fullsizeUrl}
            alt={singleImage?.title}
          />
        </div>
        <h2 className="john-fell">{singleImage?.title}</h2>
      </Container>
    </div>
  );
};

export default SingleImage;
