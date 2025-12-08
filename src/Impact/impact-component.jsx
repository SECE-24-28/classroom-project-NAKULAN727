import React from "react";
import { ImpactStyle } from "./impact-style";

const ImpactComponent = () => {
  return (
    <ImpactStyle>
      <h1>
        Impact at a <span className="glance">Glance</span>
      </h1>

      <div className="parent">

        {/* Colleges */}
        <div className="child1">
          <div className="text-wrapper">
            <span className="details">Colleges</span>
            <span className="numbers">100+</span>
          </div>

          <img
            src="https://www.aptitudeguruhem.com/static/media/school.534dd7db3daaf4c66eff.png"
            alt="Colleges"
            className="card-image"
          />
        </div>

        {/* Professional Trainers */}
        <div className="child2">
          <div className="text-wrapper">
            <span className="details">Professional Trainers</span>
            <span className="numbers">150</span>
          </div>

          <img
            src="https://www.aptitudeguruhem.com/static/media/bag.52185bac9246c85ed48f.png"
            alt="Trainers"
            className="card-image"
          />
        </div>

        {/* Study Materials */}
        <div className="child3">
          <div className="text-wrapper">
            <span className="details">Study Materials</span>
            <span className="numbers">1000+</span>
          </div>

          <img
            src="https://www.aptitudeguruhem.com/static/media/books.d290f0589bd8ed867b77.png"
            alt="Books"
            className="card-image"
          />
        </div>

        {/* Students */}
        <div className="child4">
          <div className="text-wrapper">
            <span className="details">Students</span>
            <span className="numbers">100000+</span>
          </div>

          <img
            src="https://www.aptitudeguruhem.com/static/media/people.0b6f76ebbf0b209884e7.png"
            alt="Students"
            className="card-image"
          />
        </div>

      </div>
    </ImpactStyle>
  );
};

export default ImpactComponent;
