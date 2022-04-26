import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import SideBar from './SideBar'
const logo = require('../logo.png')

const Header = () => {
  return (
    <>
      <header>
        <Row className='headerContainer'>
          <Col xs={1} className='text-align-center'>
            <SideBar />
          </Col>
          <Col xs={9} className='headerMiddle text-align-center'>
            به سینوا خوش آمدید
          </Col>
          <Col xs={1} className='text-align-center'>
            <SideBar />
          </Col>
        </Row>
      </header>
    </>
  )
}

export default Header
