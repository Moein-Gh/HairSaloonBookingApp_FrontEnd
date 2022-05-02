import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Appointments from '../components/Appointments'
import CardSlider from '../components/CardSlider'
import Categories from '../components/Categories'
import Hero from '../components/Hero'
import MainCarousel from '../components/MainCarousel'

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <Categories />
      <CardSlider />
    </>
  )
}

export default HomeScreen
