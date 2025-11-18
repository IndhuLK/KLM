import React from 'react'
import Hero from './Hero'
import InstitutionalUniforms from './InstitutionalUniforms'
import WelcomeSection from './WelcomeSection'
import ThinkingBig from './ThinkingBig'
import BrandCertification from './BrandCertification'
import BlogSection from '../../components/BlogSection'
import Review from './Review'

const Home = () => {
  return (
    <div> 
        <Hero />
        <InstitutionalUniforms />
        <WelcomeSection />
        <ThinkingBig />
        <Review />
        <BrandCertification />
        <BlogSection />
    </div>
  )
}

export default Home