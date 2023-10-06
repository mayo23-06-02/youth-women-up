import React from 'react'
import HeaderMain from '../Header/HeaderMain'
import Footer from '../Footer/Footer'
import Youth_Up_AboutComponent from './About'


export default function Youth_Up_Main() {
  return (
    <div className='home-container'>
      <HeaderMain />
      <Youth_Up_AboutComponent />
      <Footer />
    </div>
  )
}
