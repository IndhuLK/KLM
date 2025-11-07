import React from 'react'
import ShoesSlider from './ShoesSlider'
import SchoolShoes from './SchoolShoes'
import FootwearSection from './FootwearSection'
import AuthorizedDistributor from './AuthorizedDistributor'
import BrandCertification from '../Home/BrandCertification'
import BlogSection from '../../components/BlogSection'

const ShoesPage = () => {
  return (
    <div> 
        <ShoesSlider />
        <SchoolShoes />
        <FootwearSection />
        <AuthorizedDistributor />
        <BrandCertification/>
        <BlogSection />
    </div>
  )
}

export default ShoesPage