import React from "react";

import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="page-comp-wrapper">
      <Container>
        <h1 className="page-component-title">Contact</h1>

        <div className="text-center">
          <p>
            Check out my projects and my other activity using the links below:
          </p>
          <p>
            <i class="fab fa-github"></i>&nbsp;
            <a href="https://github.com/AndrewJFleming/AndrewJFleming">
              Andrew Fleming GitHub Profile
            </a>
          </p>
          <p>
            <i class="fab fa-linkedin"></i>&nbsp;
            <a href="https://www.linkedin.com/in/andrew-fleming-49916012a/">
              Andrew Fleming LinkedIn Profile
            </a>
          </p>
          <p>
            <i class="fas fa-palette"></i>&nbsp;
            <a href="https://andrewjfleming.com/">
              Andrew Fleming Portfolio Site
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
