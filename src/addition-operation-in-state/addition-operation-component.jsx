import React, { useState } from "react";
const AdditionOperationComponent = () => {
  const [fruites, setFruites] = useState(["apple", "banana"]);
  const addFruites = () => {
    setFruites((prevFruites) => [...prevFruites, "mango", "grapes"]);
    console.log("The fruites:", fruites);
  };
  return (
    <div>
      <h1>Fruits List</h1>
      <ul>
        {fruites.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <button onClick={addFruites}>Add Fruits</button>
    </div>
  );
};
export default AdditionOperationComponent;
