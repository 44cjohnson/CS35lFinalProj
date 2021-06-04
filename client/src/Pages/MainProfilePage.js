import React from "react";
import { Provider } from "react-redux"; //package that binds together react & redux
import store from "../store";
import AppNavbar from "../Components/AppNavbar";
import CardList from "../Components/cards/CardList";
import CardModal from "../Components/cards/CardModal";
import { Container, Row, Col } from "reactstrap";
import "./MainProfilePage.css";
import SearchBar from "../Components/SearchBar";

export default function MainProfilePage() {
  return (
    <Provider store={store}>
      <div className="MainProfilePage" style={{height: "100vh"}}>
      <AppNavbar fixed="top"/>
      <div className="fade-in">
        <div className="App">
          <div className="cardList">
          <div className="font-link3">
            <h1
              className="mainProfilePageMessage"
              style={{ color: "#fffff0", fontSize: 72, paddingBottom: 25 }}
            >
              MY POSTS
            </h1>
          </div> 
            <Container>
              <CardModal />
              <CardList />
            </Container>
          </div>
        </div>
      </div>
      </div>
    </Provider>
  );
}
