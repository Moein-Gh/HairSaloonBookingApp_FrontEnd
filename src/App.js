import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./bootstrap.min.css";
import "./style.css";
import React from "react";
import HomeScreen from "./screens/HomeScreen.js";
import { Col, Row } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BarberShopScreen from "./screens/BarberShopScreen";
import BarberDashboard from "./screens/BarberDashboard";
import UserprofileScreen from "./screens/UserprofileScreen";
import BookingScreen from "./screens/BookingScreen";
import NewAppointmentScreen from "./screens/NewAppointmentScreen";
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
                    path="/bookingScreen"
                    exact
                    element={<NewAppointmentScreen />}
                  />
                  <Route
                    path="/UserprofileScreen"
                    exact
                    element={<UserprofileScreen />}
                  />
                </Routes>
              </Col>
            </div>
            <Footer />
          </main>
        </Row>
      </div>
    </Router>
  );
}

export default App;
