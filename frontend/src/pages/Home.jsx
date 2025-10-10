import React from 'react'
import LandingPage from "../components/LandingPage"
import IntroSection from "../components/IntroSection"
import ServiceSection from '../components/ServiceSection'
import FrameworkSection from '../components/FrameworkSection'

const Home = () => {
  return (
    <div className="min-h-screen">
      <LandingPage />
      <IntroSection />
      <ServiceSection />
      <FrameworkSection />
    </div>
  )
}

export default Home