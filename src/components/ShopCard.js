import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

const ShopCard = ({ shop }) => {
  let image = shop.image
  console.log(image)
  return (
    <Col className='shopCardContainer'>
      <Row className='shopCardImageContainer'>
        {/* <div
          className='shopCardImage'
          style={{ backgroundImage: `url(${image})` }}
        ></div> */}
        <Image src={shop.image} className='shopCardImage' />
      </Row>

      <Row>
        <h6>{shop.name}</h6>
        <h6>{shop.customerGender}</h6>
        <h6>{shop.location}</h6>
      </Row>
    </Col>
  )
}

export default ShopCard
