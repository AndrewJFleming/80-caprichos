import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const About = ({ themes }) => {
  const [themeLinks, setThemeLinks] = useState([]);

  useEffect(() => {
    //Dislpay theme categories dynamically in sentence format where commas, 'and' and the period are placed correctly.
    let catThemes = [];
    for (let i = 0; i < themes.length; i++) {
      //Target second to last element in array.
      if (i === themes.length - 2) {
        catThemes.push({
          title: themes[i].title,
          slug: themes[i].slug,
          after: " and ",
        });
        //Target last element in array.
      } else if (i === themes.length - 1) {
        catThemes.push({
          title: themes[i].title,
          slug: themes[i].slug,
          after: ".",
        });
        //Target all elements preceding second to last and last elements in array.
      } else {
        catThemes.push({
          title: themes[i].title,
          slug: themes[i].slug,
          after: ", ",
        });
      }
    }
    setThemeLinks(catThemes);
  }, []);

  return (
    <div className="page-comp-wrapper">
      <Container>
        <h1 className="page-component-title">About</h1>
        <p>
          In the <em>Los Caprichos</em> etchings collection, Francisco Goya
          criticizes many of the superstitions and antiquated customs that were
          common in Spanish society during his lifetime.
        </p>
        <p>
          The aim of the project is to present high resolution scans of Goya's
          prints and to curate the collection by categorizing the pieces by the
          following themes repeated throughout:{" "}
          {themeLinks.map((themeLink) => (
            <React.Fragment>
              <Link to={`/category/${themeLink.slug}`}>{themeLink.title}</Link>
              {themeLink.after}
            </React.Fragment>
          ))}
        </p>
        <p>
          If you've enjoyed this project, consider exploring the rest of my{" "}
          <a href="https://github.com/AndrewJFleming/AndrewJFleming">
            web development portfolio
          </a>{" "}
          at my GitHub.
        </p>
      </Container>
    </div>
  );
};
export default About;
