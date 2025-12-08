import React from "react";
import { SymbolStyle } from "./symbol-style";

const SymbolComponent = () => {
    console.log("SymbolComponent mounted");
    return (
        <SymbolStyle>
           <div className="element__one">
        <h1>A Symbol of Excellence in Placement Training</h1>
        <p>
          Aptitude Guru Hem was born from the aspiration to create a learning
          environment that inspires greatness. Our founder, driven by personal
          experiences and a desire to make a difference, established the company
          with a mission to empower students with the right skills and mindset
          for success.
        </p>
      </div>
      <div className="element__two">
        <div className="element__two__child">
          <h2 className="sub__title1">Our Vision</h2>
          <p>
            Our vision is to empower individuals from diverse backgrounds to
            become accomplished professionals. At Aptitude Guru Hem, we 
            believe that knowledge has the power to transcend boundaries.
          </p>
        </div>
        <div className="element__two__child">
          <h2 className="sub__title2">Our Mission</h2>
          <p>
            Our mission is to revolutionize education by providing 
            comprehensive training in aptitude, coding, and web/mobile 
            development. We foster a culture of inclusivity and personal
            growth.
          </p>
        </div>
      </div>
    </SymbolStyle>
    );
};
export default SymbolComponent;