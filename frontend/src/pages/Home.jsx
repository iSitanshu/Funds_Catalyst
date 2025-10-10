import React from 'react'
import LandingPage from "../components/LandingPage"
import IntroSection from "../components/IntroSection"
import ServiceSection from '../components/ServiceSection'
import ImpactSection from '../components/ImpactSection'
import FrameworkSection from '../components/FrameworkSection'
import WhyChooseSection from '../components/WhyChooseSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <div className="min-h-screen">
      <LandingPage />
      <IntroSection />
      <ServiceSection />
      <ImpactSection />
      <FrameworkSection />
      <WhyChooseSection />
      <ContactSection />
    </div>
  )
}

export default Home