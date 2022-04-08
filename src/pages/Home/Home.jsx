import React from "react";
import { imageData } from "../../data.js";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-comp-wrapper">
      <h1 className="john-fell">80 CAPRICHOS</h1>
      {imageData.map((image) => (
        <Link to={`/caprichos/${image.id}`}>
          <img src={image.squareUrl} alt={`${image.title}, square thumbnail`} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
