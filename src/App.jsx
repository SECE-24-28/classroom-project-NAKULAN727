import "./App.css";
import { Routes, Route } from "react-router-dom";
import FetchApiComponent from "./fetch-api/fetch-api-component";
import UseEffectComponent from "./use-effect-practice/use-effect-practice";
import UseEffectPracticeTwo from "./use-effect-practice/use-effect-practice-2";
import AxiosPractice from "./fetching-api-using-intervals/fetchng-api-using-intervals";
import UseEffectPracticeThree from "./use-effect-practice/use-effect-practice-3";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FetchApiComponent />} />
      <Route path="/api-fetch" element={<FetchApiComponent />} />
      <Route path="/use-effect-practice" element={<UseEffectComponent />} />
      <Route
        path="/use-effect-practice-2"
        element={<UseEffectPracticeTwo />}
      />
      <Route
        path="/axios-practice"
        element={<AxiosPractice />}
      />
      <Route
          path="/use-effect-practice-3"
          element={<UseEffectPracticeThree />}
        />
    </Routes>
  );
}

export default App;
