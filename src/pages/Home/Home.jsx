import React from "react";
import { imageData } from "../../data.js";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="page-comp-wrapper">
      <Container>
        <h1 className="page-component-title">80 CAPRICHOS</h1>
        <p className="home-title-translation">
          <em>(Eighty Caprices)</em>
        </p>

        <Row>
          {imageData.map((image) => (
            <Col className="gallery-col" xs="6" sm="4" md="4" lg="3" xl="2">
              <Link to={`/caprichos/${image.id}`}>
                <img
                  src={image.squareUrl}
                  alt={`${image.title}, square thumbnail`}
                />
              </Link>
              <p className="gallery-item-title">
                <span className="print-id">No. {image.id},&nbsp;</span>
                <Link to={`/caprichos/${image.id}`}>
                  {image.title.length <= 13
                    ? image.title
                    : `${image.title.substring(0, 14)}...`}
                </Link>
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
