import React from 'react'
import localFont from '@next/font/local'
import About_Us_Main from '@/components/UI/About_Us/About_Us_Main'

const platelet = localFont({
    src: '../public/fonts/Platelet.otf',
    variable: '--font-platelet',
})


export default function about_us() {
    return (
        <main
            className={`home ${platelet.className}`}
        >
            <div className='home-main'>
                <About_Us_Main  />
            </div>
        </main>
    )
}
