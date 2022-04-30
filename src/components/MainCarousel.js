import React from 'react'
import { Carousel } from 'react-bootstrap'

const MainCarousel = () => {
  return (
    <Carousel variant='dark' className='carouselContainer'>
      <Carousel.Item className='carouselItem'>
        <img
          className='d-block w-100 carouselImage'
          src='/images/1.jpg'
          alt='First slide'
        />
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img
          className='d-block w-100 carouselImage'
          src='/images/2.jpg'
          alt='Second slide'
        />
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img
          className='d-block w-100 carouselImage'
          src='/images/3.jpg'
          alt='Third slide'
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default MainCarousel
