import React from "react";
import { Container } from "reactstrap";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import AppNavbar from "./Components/Navbar/AppNavbar";
import Exerciselist from "./Components/ExerciseList/ExerciseList";
import ItemModal from "./Components/ExerciseList/ItemModal";
import Auth from './Components/Auth/Auth';
import Profile from './Pages/Profile/Profile';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Workout from "./Pages/Workout/Workout";

const App = () => (
  <BrowserRouter>
    <Container maxidth="lg">
        <AppNavbar />
        <Switch>
            <Route path="/auth" exact component={Auth} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/" exact component={Home} />
            <Route path="/createworkout" exact component={Workout} />
        </Switch>
    </Container>  
  </BrowserRouter>
);

export default App;
