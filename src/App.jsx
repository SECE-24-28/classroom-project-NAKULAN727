import "./App.css";
import { Routes, Route } from "react-router-dom";
import FetchApiComponent from "./fetch-api/fetch-api-component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FetchApiComponent />} />
      <Route path="/api-fetch" element={<FetchApiComponent />} />
    </Routes>
  );
}

export default App;
