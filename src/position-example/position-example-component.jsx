import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PositionExampleComponent = ({ icon, color, title, content, index }) => {
  return (
    <div>
      <div className="box">
        <div className="box__content">
          <div className={`circular__parent${index + 1}`}>
            <div className="circle">
              <FontAwesomeIcon icon={icon} color={color} />
            </div>
          </div>
          <div className="value">{title}</div>
          <div className="name">{content}</div>
        </div>
        <div className={`box__color${index + 1}`}></div>
      </div>
    </div>
  );
};

export default PositionExampleComponent;