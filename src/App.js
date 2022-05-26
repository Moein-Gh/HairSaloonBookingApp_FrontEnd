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
import UserprofileScreen from "./screens/UserprofileScreen";
import NewAppointmentScreen from "./screens/NewAppointmentScreen";
import ScrollToTop from "./components/ScrollToTop";
import AllAppointment from "./screens/AllAppointment";
import BarberShops from "./screens/BarberShops";
import BarberDashboard from "./screens/BarberDashboard";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ManagerDashboardScreen from "./screens/ManagerDashboardScreen";
import AddBarberScreen from "./screens/AddBarberScreen";
function App() {
  return (
    <Router>
      <div className="pageContainer">
        <Row>
          <main>
            <Header />
            <div className="mainColumn">
              <Col>
                <ScrollToTop />
                <Routes>
                  <Route path="/login" exact element={<LoginScreen />} />
                  <Route path="/" exact element={<HomeScreen />} />
                  <Route
                    path="/barberShop/:facilityId"
                    exact
                    element={<BarberShopScreen />}
                  />
                  <Route
                    path="/bookingScreen"
                    exact
                    element={<NewAppointmentScreen />}
                  />
                  <Route
                    path="/addbarber"
                    exact
                    element={<AddBarberScreen />}
                  />
                  <Route
                    path="/allAppointments"
                    exact
                    element={<AllAppointment />}
                  />
                  <Route
                    path="/UserprofileScreen"
                    exact
                    element={<UserprofileScreen />}
                  />
                  <Route
                    path="/barberDashboard"
                    exact
                    element={<BarberDashboard />}
                  />
                  <Route
                    path="/managerDashboard"
                    exact
                    element={<ManagerDashboardScreen />}
                  />
                  <Route path="/register" exact element={<RegisterScreen />} />

                  <Route path="/:category" exact element={<BarberShops />} />
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
