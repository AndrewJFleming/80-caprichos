import React from "react";
import { useParams } from "react-router-dom";

import { Container } from "react-bootstrap";
import { imageData } from "../../data.js";
import "./SingleImage.css";

const SingleImage = () => {
  const { imageId } = useParams();

  return (
    <div className="page-comp-wrapper">
      {imageData
        .filter((image) => image.id === imageId)
        .map((image) => (
          <Container>
            <h2 className="single-image-title">{image?.title}</h2>
            <h5 className="single-image-english">{image?.englishTitle}</h5>
            <div classname="single-image-wrapper">
              <img
                className="single-image-fullsize"
                src={image?.fullsizeUrl}
                alt={image?.title}
              />
            </div>
          </Container>
        ))}
    </div>
  );
};

export default SingleImage;
