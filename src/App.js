import React, { useState } from "react";

import Home from "./pages/Home/Home";
import VerticalMenu from "./components/VerticalMenu/VerticalMenu";
import Header from "./components/Header/Header";
import { categoryData, backgroundColorData } from "./data";
import { Routes, Route } from "react-router-dom";
import SingleImage from "./pages/SingleImage/SingleImage";
import ImageCategory from "./pages/ImageCategory/ImageCategory";

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
        categories={categories}
        backgroundColor={backgroundColor}
        vertMenuCollapsed={vertMenuCollapsed}
        handleVertCollapse={handleVertCollapse}
      />
      <div className="app-inner">
        <Header
          vertMenuCollapsed={vertMenuCollapsed}
          handleVertCollapse={handleVertCollapse}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/caprichos/:imageId" element={<SingleImage />} />
          <Route path="/category/:catId" element={<ImageCategory />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
