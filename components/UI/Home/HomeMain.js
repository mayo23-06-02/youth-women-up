import React from 'react'
import HeaderMain from '../Header/HeaderMain'
import Background from '../Images/Background'
import LandingSection from './HomeFeed/LandingSection'
import AboutSection from './HomeFeed/AboutSection'
import RealPeopleRealStoriesSection from './HomeFeed/RealPeopleRealStoriesSection'
import InfographicSection from './HomeFeed/InfographicSection'
import EventsWorkshops from './HomeFeed/EventsWorkshops'
import Reviews from './HomeFeed/Reviews'
import Footer from '../Footer/Footer'
import AboutUs_SM from './HomeFeed/AboutUs_SM'
import InfographicSection_SM from './HomeFeed/InfographicSection_SM'

export default function HomeMain() {
  return (
    <div className='home-container md:px-12'>
      <HeaderMain />
      <Background />
      <LandingSection />
      <div className='hidden lg:inline'>
        <AboutSection />
      </div>
      <div className=' lg:hidden'>
        <AboutUs_SM />
      </div>
      <RealPeopleRealStoriesSection />
      <div className='hidden lg:inline'>
        <InfographicSection />
      </div>
      <div className='lg:hidden'>
        <InfographicSection_SM />
      </div>
      <EventsWorkshops />
      <Reviews />
      <Footer />
    </div>
  )
}
