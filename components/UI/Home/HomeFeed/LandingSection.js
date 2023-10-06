import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { BiPlay } from 'react-icons/bi'

export default function LandingSection() {
    const router = useRouter()
    return (
        <div className='landing-container'>
            <div className='landing-left-section'>
                <div className='landing-text-container'>
                    <div className='landing-title'>
                        <p>EMPOWERING THE YOUTH.</p>
                        <p>UPLIFTIONG YOUNG WOMEN.</p>
                    </div>
                    <p className='landing-subtitle'>Youth and Women Empowerment in Action. At Youth and Women UP, we believe in transformative power of education, mentorship, and community.</p>
                </div>
                <div className='landing-button-container w-full items-center lg:justify-start flex justify-center pt-16 relative'>
                    <button onClick={() => router.push('../../about-us')} className=' landing-button'>
                        <div className='landing-play' >
                            <BiPlay className='text-2xl' />
                        </div>
                        <p >Learn More</p>
                    </button>
                </div>
            </div>
            <div>
                <Image src={'https://res.cloudinary.com/loooktrial/image/upload/v1694688434/Taking_care_of_the_Earth-bro_dijnn6.png'} width={500} height={500} alt='home-page' />
            </div>
        </div>
    )
}
