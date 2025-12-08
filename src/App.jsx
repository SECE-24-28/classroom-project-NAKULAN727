import "./App.css";
import { Routes, Route } from "react-router-dom";
import { OurPromiseStyle } from "./our-promise/our-promise-style";
import { OurpromisesData } from "./our-promise/data";
import OurPromiseComponent from "./our-promise/our-promise-component";
import { PositionExampleStyle } from "./position-example/position-example-style";
import { PositionData } from "./position-example/data_2";
import PositionExampleComponent from "./position-example/position-example-component";
import OurCoursesComponent from "./our-courses/our-courses-component";
import TrustedByComponent from "./trusted-by/trusted-by-component";
import SymbolOfExcellenceComponent from "./Symbol-of-Excellence/symbol-component";
import FourOFourComponent from "./404-component/404-component";
import UseStateComponent from "./usestate-1st/use-state-component";
import UsestateformComponent from "./use-state-form/use-state-form-component";

function App() {
  return (
    <Routes>
      <Route
        path="/symbol"
        element={
          <OurPromiseStyle>
            <h1 className="title">Our Promise</h1>
            <p className="title-content">
              As part of our high quality service, we'd like to offer something
              extra too.
            </p>
            <div className="grid">
              {OurpromisesData.map((item, index) => (
                <OurPromiseComponent
                  key={index}
                  icon={item.icon}
                  color={item.color}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </OurPromiseStyle>
        }
      />
      <Route
        path="/position-example"
        element={
          <PositionExampleStyle gapLength="3rem">
            {PositionData.map((item, index) => (
              <PositionExampleComponent
                key={index}
                index={index}
                icon={item.icon}
                color={item.color}
                title={item.title}
                content={item.content}
              />
            ))}
          </PositionExampleStyle>
        }
      />
      <Route path="/our-courses" element={<OurCoursesComponent />} />
      <Route path="/trusted-by" element={<TrustedByComponent />} />
      <Route
        path="/symbol-of-excellence"
        element={<SymbolOfExcellenceComponent />}
      />
      <Route path="*" element={<FourOFourComponent />} />
      <Route path="/use-state-practice" element={<UseStateComponent />} />
      <Route path="/use-state-form" element={<UsestateformComponent />} />
    </Routes>
  );
}


export default App;