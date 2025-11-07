import React from 'react'
import Hero from './Hero'
import InstitutionalUniforms from './InstitutionalUniforms'
import WelcomeSection from './WelcomeSection'
import ThinkingBig from './ThinkingBig'
import BrandCertification from './BrandCertification'
import BlogSection from '../../components/BlogSection'

const Home = () => {
  return (
    <div> 
        <Hero />
        <InstitutionalUniforms />
        <WelcomeSection />
        <ThinkingBig />
        <BrandCertification />
        <BlogSection />
    </div>
  )
}

export default Home