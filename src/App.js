import { Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import AddBarberScreen from "./screens/AddBarberScreen";
import AllAppointmentsForBarber from "./screens/AllAppointmentsForBarber";
import AllAppointmentsForUser from "./screens/AllAppointmentsForUser";
import AppointmentScreen from "./screens/AppointmentScreen";
import BarberDashboard from "./screens/BarberDashboard";
import BarberShops from "./screens/BarberShops";
import BarberShopScreen from "./screens/BarberShopScreen";
import HomeScreen from "./screens/HomeScreen.js";
import LoginScreen from "./screens/LoginScreen";
import ManagerDashboardScreen from "./screens/ManagerDashboardScreen";
import NewAppointmentScreen from "./screens/NewAppointmentScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UserprofileScreen from "./screens/UserprofileScreen";
import "./style.css";

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
                    path="/appointmentScreen/:appointmentId"
                    exact
                    element={<AppointmentScreen />}
                  />
                  <Route
                    path="/addbarber"
                    exact
                    element={<AddBarberScreen />}
                  />
                  <Route
                    path="/allUserAppointments"
                    exact
                    element={<AllAppointmentsForUser />}
                  />
                  <Route
                    path="/allBarberAppointments"
                    exact
                    element={<AllAppointmentsForBarber />}
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
