import React from 'react'
import Hero from '../components/Hero'
import PopularServices from '../components/PopularServices'  
import HowItWorks from '../components/HowItWorks'
import CallToAction from '../components/CallToAction'
const Home = () => {
  return (
      <>
   <Hero/>
    <PopularServices/>
    <HowItWorks/>
    <CallToAction/>
   </>
    
  );
}

export default Home