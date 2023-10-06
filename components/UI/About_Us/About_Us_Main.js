import React from 'react'
import HeaderMain from '../Header/HeaderMain'
import Background from '../Images/Background'
import Footer from '../Footer/Footer'
import AboutComponent from './AboutComponent'
import RealPeopleRealStoriesSection from '../Home/HomeFeed/RealPeopleRealStoriesSection'

export default function About_Us_Main() {
  return (
    <div className='home-container'>
      <HeaderMain />
      <AboutComponent />
      <Footer />
    </div>
  )
}
