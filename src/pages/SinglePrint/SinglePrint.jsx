import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Container } from "react-bootstrap";
import { imageData } from "../../data.js";
import "./SinglePrint.css";
import Image from "./Image/Image.jsx";

const SinglePrint = () => {
  const { imageId } = useParams();
  const [isZoomedIn, setIsZoomedIn] = useState();

  return (
    <div className="page-comp-wrapper">
      {imageData
        .filter((image) => image.id === imageId)
        .map((image) => (
          <Container>
            {!isZoomedIn && (
              <React.Fragment>
                <h2 className="single-image-title">{image?.title}</h2>
                <h5 className="single-image-english">
                  <em>({image?.englishTitle})</em>
                </h5>
                <div className="categories-wrapper">
                  {image?.categories.map((cat) => (
                    <Link
                      className="single-image-category"
                      to={`/category/${cat.slug}`}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </React.Fragment>
            )}
            <Image
              isZoomedIn={isZoomedIn}
              image={image}
              setIsZoomedIn={setIsZoomedIn}
            />
          </Container>
        ))}
    </div>
  );
};

export default SinglePrint;
