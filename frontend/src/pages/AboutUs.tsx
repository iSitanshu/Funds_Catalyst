import React from 'react'
import NewsLetterSection from "../components/NewsLetterSection"
import WhyChooseSection from '../components/WhyChooseSection'

const AboutUs = () => {
    // nfn for the creating a function
  return (
    <div>
      ABOUT FUNDS CATALYST
      WHO WE ARE
At Funds Catalyst, we are committed to building bridges between purpose and execution. From grassroots NGOs to established corporations, we empower organizations through expert consulting in project design, policy compliance, government scheme access, CSR collaboration, and capacity development.
OUR MISSION
To catalyze impactful change by empowering NGOs, companies, and public institutions through strategic consulting, policy expertise, and project implementation support—bridging the gap between vision and execution.
We strive to offer customized, ethical, and scalable solutions that address real-world challenges across diverse sectors.

OUR GOAL
To become India’s most trusted partner in the development and corporate social responsibility ecosystem, enabling transparent, efficient, and sustainable solutions that create measurable social and economic value.
We aim to expand our footprint across all states, fostering long-term partnerships that prioritize impact, compliance, and innovation.
 
      <h1>Our Journey</h1>
      <img src="./../src/assets/Roadmap.webp" alt="Roadmap Funds Catalyst" className='w-1/2 m-auto'/>
      <WhyChooseSection />
      <NewsLetterSection />
    </div>
  )
}

export default AboutUs
