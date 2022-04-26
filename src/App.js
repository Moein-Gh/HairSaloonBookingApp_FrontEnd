import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import './bootstrap.min.css'
import './style.css'
import './navigation.css'
import React from 'react'
import HomeScreen from './screens/HomeScreen.js'
import { Col, Row } from 'react-bootstrap'
import SideBar from './components/SideBar'
import Header from './components/Header'
function App() {
  return (
    <Router>
      <div className='pageContainer'>
        <Row>
          <main>
            <Header />
            <div className='mainColumn'>
              <Col>
                <Routes>
                  <Route path='/' exact element={<HomeScreen />} />
                </Routes>
              </Col>
            </div>
          </main>
        </Row>
      </div>
    </Router>
  )
}

export default App
