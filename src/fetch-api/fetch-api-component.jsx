import React, { useState } from "react";
import axios from "axios";
import "./fetch-api.css";

const FetchApiComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      const response2 = await axios("https://dummyjson.com/products");
      const response3 = await axios("https://dummyjson.com/todos");

      // Combine all API results
      const allData = [
        ...response.data, // users
        ...response2.data.products, // products
        ...response3.data.todos, // todos
      ];

      setData(allData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fetch-container">
      <h1 className="fetch-header">API Fetch</h1>

      {data.length === 0 ? (
        <>
          {/* Only show the No Data message if we aren't loading yet, or if we loaded and got nothing (though unlikely with 3 APIs) */}
          {!loading && <h1 className="empty-state">No data is existing</h1>}

          <button className="fetch-btn" onClick={fetchData} disabled={loading}>
            {loading ? "Fetching..." : "Fetch Data"}
          </button>
        </>
      ) : (
        <div className="grid-container">
          {data.map((item, index) => (
            <div key={index} className="card">
              <h3>{item.name || item.title || item.todo}</h3>

              {/* Users have email */}
              {item.email && (
                <p className="description">
                  <strong>Email:</strong> {item.email}
                </p>
              )}

              {/* Products have price */}
              {item.price && <p className="price">${item.price}</p>}

              {/* Todos have completion status */}
              {item.completed !== undefined && (
                <p
                  className="description"
                  style={{
                    color: item.completed ? "#26d0ce" : "#e53e3e",
                    fontWeight: "bold",
                  }}
                >
                  Status: {item.completed ? "Completed" : "Not Completed"}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchApiComponent;
