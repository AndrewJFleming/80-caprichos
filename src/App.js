import React, { useState } from "react";

import Home from "./pages/Home/Home";
import VerticalMenu from "./components/VerticalMenu/VerticalMenu";
import Header from "./components/Header/Header";
import { otherLinks, categoryData, backgroundColorData } from "./data";
import { Routes, Route } from "react-router-dom";
import SingleImage from "./pages/SingleImage/SingleImage";
import ImageCategory from "./pages/ImageCategory/ImageCategory";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  const [categories, setCategories] = useState(categoryData);
  const [backgroundColor, setBackgroundColor] = useState(
    backgroundColorData[0].color
  );
  const [vertMenuCollapsed, setVertMenuCollapsed] = useState(true);

  const handleVertCollapse = () => {
    setVertMenuCollapsed(!vertMenuCollapsed);
  };

  return (
    <div className="app-wrapper">
      <VerticalMenu
        otherLinks={otherLinks}
        categories={categories}
        backgroundColor={backgroundColor}
        vertMenuCollapsed={vertMenuCollapsed}
        handleVertCollapse={handleVertCollapse}
      />
      <div className="app-inner">
        <Header
          otherLinks={otherLinks}
          vertMenuCollapsed={vertMenuCollapsed}
          handleVertCollapse={handleVertCollapse}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={<About themes={categories[0].subCats} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/caprichos/:imageId" element={<SingleImage />} />
          <Route path="/category/:catId" element={<ImageCategory />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
