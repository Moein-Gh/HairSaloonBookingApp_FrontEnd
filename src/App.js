import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./bootstrap.min.css";
import "./style.css";
import React from "react";
import HomeScreen from "./screens/HomeScreen.js";
import { Col, Row } from "react-bootstrap";
import Header from "./components/Header";
import BarberShopScreen from "./screens/BarberShopScreen";
import UserProfileScreen from "./screens/UserProfileScreen";
function App() {
  return (
    <Router>
      <div className="pageContainer">
        <Row>
          <main>
            <Header />
            <div className="mainColumn">
              <Col>
                <Routes>
                  <Route path="/" exact element={<HomeScreen />} />
                  <Route
                    path="/barberShop"
                    exact
                    element={<BarberShopScreen />}
                  />
                  <Route
                    path="/userprofile"
                    exact
                    element={<UserProfileScreen />}
                  />
                </Routes>
              </Col>
            </div>
          </main>
        </Row>
      </div>
    </Router>
  );
}

export default App;
