import React from "react";
import { OurCoursesStyle } from "./our-courses-style";
import { OurCoursesData } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OurCoursesComponent = () => {
  return (
    <OurCoursesStyle>
      <h1 className="title">Our Courses</h1>
      <p className="title-content">
        Explore our wide range of courses designed to help you succeed.
      </p>
      <div className="grid">
        {OurCoursesData.map((item, index) => (
          <div
            className="card"
            key={index}
            style={{ borderTopColor: item.color }}
          >
            <div className="card-header">
              <FontAwesomeIcon
                icon={item.icon}
                className="icon"
                style={{ color: item.color }}
              />
              <div className="card-title">{item.title}</div>
            </div>
            <p className="card-text">{item.content}</p>
          </div>
        ))}
      </div>
    </OurCoursesStyle>
  );
};

export default OurCoursesComponent;
