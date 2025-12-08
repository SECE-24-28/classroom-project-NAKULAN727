import React from "react";
const PropsPracticeComponent = (props) => {
    return (
        <div>
            <h1>Props Practice Component</h1>
            <div>{props.name}</div>
            <div>{props.mobile}</div>
        </div>
    );
};
export default PropsPracticeComponent;
