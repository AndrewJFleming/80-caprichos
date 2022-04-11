import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Container } from "react-bootstrap";
import { imageData } from "../../data.js";
import "./SingleImage.css";

const SingleImage = () => {
  const { imageId } = useParams();
  const [isFullscreen, setIsFullscreen] = useState();

  return (
    <div className="page-comp-wrapper">
      {imageData
        .filter((image) => image.id === imageId)
        .map((image) => (
          <Container>
            {!isFullscreen && (
              <React.Fragment>
                <h2 className="single-image-title">{image?.title}</h2>
                <h5 className="single-image-english">
                  <em>({image?.englishTitle})</em>
                </h5>
                <div className="categories-wrapper">
                  {image?.categories.map((cat) => (
                    <p className="single-image-category">
                      <Link to={`/category/${cat.slug}`}>{cat.name}</Link>
                    </p>
                  ))}
                </div>
              </React.Fragment>
            )}
            <div classname="single-image-wrapper">
              <img
                className={`single-image-fullsize ${
                  isFullscreen && "enlarged"
                }`}
                src={image?.fullsizeUrl}
                alt={`${image?.title}, from fullsize url`}
                onClick={() => setIsFullscreen(!isFullscreen)}
              />
            </div>
          </Container>
        ))}
    </div>
  );
};

export default SingleImage;
