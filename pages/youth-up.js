import React from 'react'
import localFont from '@next/font/local'
import Youth_Up_Main from '@/components/UI/Youth_Up/Main'

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
                <Youth_Up_Main />
            </div>
        </main>
    )
}
