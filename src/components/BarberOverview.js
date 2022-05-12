import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BarberCharts from './BarberCharts'

const BarberOverview = () => {
  return (
    <>
      <Row className='barberSalaryAppointment'>
        <Col md={3} xs={6} className='barberInfoContainer'>
          <Row className='barberInfo'> درآمد امروز : 100000</Row>
        </Col>
        <Col md={3} xs={6} className='barberInfoContainer'>
          <Row className='barberInfo'> تعداد نوبت های امروز : 5</Row>
        </Col>
        <Col md={3} xs={6} className='barberInfoContainer'>
          <Row className='barberInfo'> درآمد این ماه : 500000</Row>
        </Col>
        <Col md={3} xs={6} className='barberInfoContainer'>
          <Row className='barberInfo'> تعداد نوبت های این ماه : 60</Row>
        </Col>
      </Row>

      <Row className='defaultContainer'>
        <BarberCharts />
      </Row>
    </>
  )
}

export default BarberOverview
