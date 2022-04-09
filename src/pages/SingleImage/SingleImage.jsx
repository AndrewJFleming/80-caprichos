import React from "react";
import { useParams } from "react-router-dom";

import { Container } from "react-bootstrap";
import { imageData } from "../../data.js";
import "./SingleImage.css";

const SingleImage = () => {
  const { imageId } = useParams();

  return (
    <div className="single-page-wrapper">
      {imageData
        .filter((image) => image.id === imageId)
        .map((image) => (
          <Container>
            <div>
              <img
                className="single-image-fullsize"
                src={image?.fullsizeUrl}
                alt={image?.title}
              />
            </div>
            <h2>{image?.title}</h2>
          </Container>
        ))}
    </div>
  );
};

export default SingleImage;
