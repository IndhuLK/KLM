import React from 'react'
import UniSlider from './UniSlider'
import UniformSolutions from './UniformSolutions'
import NurseryUniform from './NurseryUniform'
import SeniorUniform from './SeniorUniform'
import BrandCertification from '../Home/BrandCertification'
import BlogSection from '../../components/BlogSection'

const UniformPage = () => {
  return (
    <div>
      <UniSlider />
      <UniformSolutions />
    <NurseryUniform /> 
    <SeniorUniform />
    <BrandCertification />
    <BlogSection />
    </div>
  )
}

export default UniformPage