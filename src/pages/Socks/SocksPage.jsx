import React from 'react'
import SocksSlider from './SocksSlider'
import SchoolSocksSection from './SchoolSocksSection'
import UniformAccessories from './UniformAccessories'
import FunctionalAddOns from './FunctionalAddOns'
import BrandCertification from '../Home/BrandCertification'
import BlogSection from '../../components/BlogSection'

const SocksPage = () => {
  return (
    <div>
        <SocksSlider />
        <SchoolSocksSection />
        <UniformAccessories />
        <FunctionalAddOns />
         <BrandCertification/>
         <BlogSection />
    </div>
  )
}

export default SocksPage