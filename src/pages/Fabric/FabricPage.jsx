import React from 'react'
import FabricSlider from './FabricSlider'
import SchoolUniformFabrics from './SchoolUniformFabrics'
import WovenWithCare from './WovenWithCare'
import TransformingTrust from './TransformingTrust'
import BrandCertification from '../Home/BrandCertification'
import BlogSection from '../../components/BlogSection'


const FabricPage = () => {
  return (
    <div>
        <FabricSlider />
        <SchoolUniformFabrics />
        <WovenWithCare /> 
        <TransformingTrust />
        <BrandCertification/>
        <BlogSection />
    </div>
  )
}

export default FabricPage