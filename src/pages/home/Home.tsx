// import React from 'react'
import HeroSection from '../../components/home/HeroSection'
import RealEstateSection from '../../components/home/RealStateSection'
// import InvestmentJourney from '../../components/home/InvestmentJourney'
import VisionSection from '../../components/home/VisionSection'
import WhyChooseHouseOfFrac from '../../components/home/WhyChooseHouseOfFrac'
import HowItWorks from '../../components/home/HowItWorks'
import HorizontalCards from '../../components/home/HorizonatalCards'

function Home() {
  return (
    <div>
      <HeroSection/>
      <RealEstateSection/>
      {/* <InvestmentJourney/> */}
      <VisionSection/>
      <HowItWorks/>
      <WhyChooseHouseOfFrac/>
      <HorizontalCards/>
    </div>
  )
}

export default Home