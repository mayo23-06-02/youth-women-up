import React from 'react'
import localFont from '@next/font/local'
import About_Us_Main from '@/components/UI/About_Us/About_Us_Main'
import Women_Up_Main from '@/components/UI/Women_Up/Main'

const platelet = localFont({
    src: '../public/fonts/Platelet.otf',
    variable: '--font-platelet',
})


export default function women_up() {
    return (
        <main
            className={`home ${platelet.className}`}
        >
            <div className='home-main'>
                <Women_Up_Main  />
            </div>
        </main>
    )
}
