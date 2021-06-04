import React from "react";
import { Provider } from "react-redux"; //package that binds together react & redux
import store from "../store";
import AppNavbar from "../Components/AppNavbar";
// import Exerciselist from "../Components/ExerciseList";
// import ItemModal from "../Components/ItemModal";
import { Container, Row } from "reactstrap";
import "./StopwatchPage.css";

import Stopwatch from "../Components/Stopwatch.js";
import ItemModal from "../Components/ItemModal";
import ExerciseList from "../Components/ExerciseList";

export default function StopwatchPage() {
  return (
    <Provider store={store}>
      <div className="StopwatchPage" style={{height: "100vh"}}>
        <div className="App">
          <AppNavbar />
          <div className="fade-in">
          <div className="font-link3">
            <h1
              className="StopwatchPageMessage"
              style={{ color: "#D6D6D7", fontSize: 72 }}
            >
              STOPWATCH
            </h1>
          </div>
          <Container>
            <Stopwatch />
          </Container>
          <div className="otherButtons" style={{paddingBottom: "40px"}} >
            <ItemModal />
            <ExerciseList />
          </div>
        </div>
        </div>
      </div>
    </Provider>
  );
}
