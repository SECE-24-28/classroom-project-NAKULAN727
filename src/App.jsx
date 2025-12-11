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
import AdditionOperationComponent from "./addition-operation-in-state/addition-operation-component";
import MediaComponent from "./Clone/media-component";
import ImpactComponent from "./Impact/impact-component";
import ContactUsComponent from "./contact-us/contact-us-component";
import PostionComponent from "./positioning/position-component";
import PropsPracticeComponent from "./props-practice/props-practice-component";
import SignupFormComponent from "./signup-form-api/signup-form-component";
import SignupFormAdminComponent from "./signup-admin-form-api/signup-admin-form-component";

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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100vh",
            }}
          >
            <h1
              style={{
                marginBottom: "3rem",
                fontFamily: '"Work Sans", sans-serif',
                fontSize: "40px",
                fontWeight: "700",
              }}
            >
              Trusted By
            </h1>
            <PositionExampleStyle gapLength="3rem" style={{ height: "auto" }}>
              {PositionData.map((item, index) => (
                <PositionExampleComponent
                  key={index}
                  index={index}
                  icon={item.icon}
                  color={item.color}
                  title={item.title}
                  content={item.content}
                  description={item.description}
                />
              ))}
            </PositionExampleStyle>
          </div>
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
      <Route
        path="/addition-operation"
        element={<AdditionOperationComponent />}
      />
      <Route path="/media" element={<MediaComponent />} />
      <Route path="/impact" element={<ImpactComponent />} />
      <Route path="/contact-us" element={<ContactUsComponent />} />
      <Route path="/positioning" element={<PostionComponent />} />
      <Route
        path="/props-practice"
        element={
          <PropsPracticeComponent name="Test User" mobile="9876543210" />
        }
      />
      <Route path="/signup-form" element={<SignupFormComponent />} />
      <Route path="/signup-admin-form" element={<SignupFormAdminComponent />} />
    </Routes>
  );
}

export default App;
