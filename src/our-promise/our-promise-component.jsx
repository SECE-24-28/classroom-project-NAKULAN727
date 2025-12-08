import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OurPromiseComponent = ({ icon, color, title, content }) => {
  return (
    <div className="card" style={{ borderTopColor: color }}>
      <div className="card-header">
        <FontAwesomeIcon
          icon={icon}
          className="icon"
          style={{ color: color }}
        />
        <div className="card-title">{title}</div>
      </div>
      <p className="card-text">{content}</p>
    </div>
  );
};

export default OurPromiseComponent;