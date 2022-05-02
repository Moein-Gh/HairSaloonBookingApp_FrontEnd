import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Appointment from './Appointment'
let appointment = {
  key: 1,
  date: '1400/02/01',
  hour: '7:00',
  facilityName: 'سام راد',
  barberName: 'فراز محمدی',
  cost: 50000,
}

const NewAppointment = () => {
  return (
    <>
      <Col className='defaultContainer h-100 mt-3'>
        <div className='flex-center position-relative'>
          <h4 className=''>نوبت جدید</h4>
        </div>
        <hr />
        <Row>
          <h5>تکرار آخرین نوبت</h5>
          <Row>
            <Appointment
              appointment={appointment}
              repeatAppointmentButton={true}
            />
          </Row>
        </Row>
        <Row>
          <h5>نوبت جدید</h5>
          <Row>
            <Col lg={9}>نوبت جدید بگیرید</Col>
            <Col lg={3}>
              <button className='btn'>انتخاب زمان</button>
            </Col>
          </Row>
        </Row>
      </Col>
    </>
  )
}

export default NewAppointment
