import React, { useEffect, useState } from "react";

import Home from "./pages/Home/Home";
import VerticalMenu from "./components/VerticalMenu/VerticalMenu";
import Header from "./components/Header/Header";
import { otherLinks, categoryData, backgroundColorData } from "./data";
import { Routes, Route } from "react-router-dom";
import SinglePrint from "./pages/SinglePrint/SinglePrint";
import PrintCategory from "./pages/PrintCategory/PrintCategory";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  const [allSubCats, setAllSubCats] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState(
    backgroundColorData[0].color
  );
  const [vertMenuCollapsed, setVertMenuCollapsed] = useState(true);

  useEffect(() => {
    const mergedSubCats = [];
    categoryData.forEach((category) =>
      category.subCats.forEach((subCat) => mergedSubCats.push(subCat))
    );
    setAllSubCats(mergedSubCats);
  }, []);

  const handleVertCollapse = () => {
    setVertMenuCollapsed(!vertMenuCollapsed);
  };

  return (
    <div className="app-wrapper">
      <VerticalMenu
        otherLinks={otherLinks}
        categories={categoryData}
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
          <Route path="/about" element={<About themes={allSubCats} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/caprichos/:imageId" element={<SinglePrint />} />
          <Route
            path="/category/:catId"
            element={<PrintCategory allSubCats={allSubCats} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
