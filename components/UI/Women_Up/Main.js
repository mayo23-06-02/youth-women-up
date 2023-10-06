import React from 'react'
import HeaderMain from '../Header/HeaderMain'
import Footer from '../Footer/Footer'
import Women_Up_AboutComponent from './About'


export default function Women_Up_Main() {
  return (
    <div className='home-container'>
      <HeaderMain />
      <Women_Up_AboutComponent />
      <Footer />
    </div>
  )
}
