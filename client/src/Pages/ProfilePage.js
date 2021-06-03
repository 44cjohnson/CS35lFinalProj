
import React from "react";
import { Provider } from "react-redux"; //package that binds together react & redux
import store from "../store";
import AppNavbar from "../Components/AppNavbar";
import AllCardList from "../Components/cards/AllCardList";
import { Container, Row, Col } from "reactstrap";
import "./ProfilePage.css";
import SearchBar from "../Components/SearchBar";

export default function ProfilePage() {
  return (
    <Provider store={store}>
      <div className="profilePage" style={{height: "100vh"}}>
      <AppNavbar fixed="top"/>
        <div className="App">
          <div className="cardList">
          <div className="font-link3">
            <h1
              className="ProfilePageMessage"
              style={{ color: "black", fontSize: 72, paddingBottom: 25 }}
            >
              FEED
            </h1>
          </div> 
            <Container>
              
              <AllCardList />
            </Container>
          </div>
        </div>
      </div>
    </Provider>
  );
}


