import React from 'react'
import SportsSlider from './SportsSlider'
import SportsCollection from './SportsCollection'
import WhyChooseKlmSports from './WhyChooseKlmSports'
import BrandCertification from '../Home/BrandCertification'
import BlogSection from '../../components/BlogSection'

const SportsPage = () => {
  return (
    <div>
        <SportsSlider />
        <SportsCollection />
        <WhyChooseKlmSports />
        <BrandCertification />
        <BlogSection />
    </div>
  )
}

export default SportsPage