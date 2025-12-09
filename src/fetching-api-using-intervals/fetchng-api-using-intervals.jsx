import React, { useEffect, useState } from "react";
import axios from "axios"; // Uncommented this

const AxiosPractice = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Axios call
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data); // Axios puts the result in .data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []); 

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>User List:</h1>
      {data.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default AxiosPractice;