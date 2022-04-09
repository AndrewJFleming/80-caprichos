import React from "react";
import { imageData } from "../../data.js";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div className="page-comp-wrapper">
      <Container>
        <h1>80 CAPRICHOS</h1>
        <Row>
          {imageData.map((image) => (
            <Col className="gallery-col" xs="6" sm="4" md="4" lg="3" xl="2">
              <Link to={`/caprichos/${image.id}`}>
                <img
                  src={image.squareUrl}
                  alt={`${image.title}, square thumbnail`}
                />
              </Link>
              <Link
                className="gallery-item-title-link"
                to={`/caprichos/${image.id}`}
              >
                <p className="gallery-item-title">
                  {image.title.length <= 13
                    ? image.title
                    : `${image.title.substring(0, 14)}...`}
                </p>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
