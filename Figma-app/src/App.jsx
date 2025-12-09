import React from "react";
import HeaderComponent from "./header/header-component";
import SectionOneComponent from "./section1/section1-component";
import SectionTwoComponent from "./section2/section2-component";
import SectionThreeComponent from "./section3/section3-component";
import SectionFourComponent from "./section4/section4-component";
import FooterComponent from "./footer/footer-component";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <HeaderComponent />
      <SectionOneComponent />
      <SectionTwoComponent />
      <SectionThreeComponent />
      <SectionFourComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
