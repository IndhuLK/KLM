import React from 'react'
import JacketsSlider from './JacketsSlider'
import SchoolCollection from './SchoolCollection'
import CommitmentToExcellence from './CommitmentToExcellence'
import BrandCertification from '../Home/BrandCertification'
import BlogSection from '../../components/BlogSection'



const JacketsPage = () => {
  return (
    <div>
        <JacketsSlider />
        <SchoolCollection />
        <CommitmentToExcellence />
        <BrandCertification />
        <BlogSection />
    </div>
  )
}

export default JacketsPage