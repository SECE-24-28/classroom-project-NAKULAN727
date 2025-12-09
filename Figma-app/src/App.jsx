import React from "react";
import HeaderComponent from "./header/header-component";
import SectionOneComponent from "./section1/section1-component";
import SectionTwoComponent from "./section2/section2-component";
import SectionThreeComponent from "./section3/section3-component";
import SectionFourComponent from "./section4/section4-component";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/header" element={<HeaderComponent />} />
      <Route path="/section1" element={<SectionOneComponent />} />
      <Route path="/section2" element={<SectionTwoComponent />} />
      <Route path="/section3" element={<SectionThreeComponent />} />
      <Route path="/section4" element={<SectionFourComponent />} />
    </Routes>
  );
}

export default App;
