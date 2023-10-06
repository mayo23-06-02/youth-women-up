import React from 'react'
import { BiPlay } from 'react-icons/bi'

export default function RealPeopleRealStoriesSection() {
    return (
        <div className='px-4 lg:grid relative grid-flow-row grid-cols-2  lg:space-x-12 w-full lg:space-y-0 space-y-12  pb-24'>
            <div className='space-y-6 flex flex-col w-full  '>
                <div className='-space-y-2 text-3xl lg:text-5xl tracking-tighter  font-bold'>
                    <p>MEET OUR 20 ,</p>
                    <p>WOMEN COORPORATIVE</p>
                </div>
                <div className='relative h-[420px] lg:h-[620px]'>
                    <div className='h-[400px] lg:h-[600px] rounded-lg z-10 absolute bg-gray3 border-[6px] border-primary w-full'>
                    </div>

                </div>
                <div className='space-y-2'>
                    <p className='font-bold text-2xl tracking-tight'>JOHN DOE</p>
                    <p>Youth and Women Empowerment in Action. At Youth and
                        Women UP, we believe in transformative power of education,
                        mentorship, and community.</p>
                </div>
                <div className='flex  w-64 items-center justify-center py-2 rounded-lg space-x-2 bg-gray2 '>
                    <p>Mentorship</p>
                    <p>|</p>
                    <p>Mental Health</p>
                </div>

            </div>
            <div className=' space-y-6 flex flex-col'>
                <div className='relative h-[420px] lg:h-[620px]'>
                    <div className='h-[400px] lg:h-[600px] rounded-lg z-10 absolute bg-gray3 border-[6px] border-primary w-full'>
                    </div>

                </div>
                <div className='space-y-2'>
                    <p className='font-bold text-2xl tracking-tight'>JOHN DOE</p>
                    <p>Youth and Women Empowerment in Action. At Youth and
                        Women UP, we believe in transformative power of education,
                        mentorship, and community.</p>
                </div>
                <div className='flex  w-64 items-center justify-center py-2 rounded-lg space-x-2 bg-gray2 '>
                    <p>Mentorship</p>
                    <p>|</p>
                    <p>Mental Health</p>
                </div>

            </div>
            <button className=' landing-button lg:right-0 right-4  bottom-0'>
                <div className='landing-play' >
                    <BiPlay className='text-2xl' />
                </div>
                <p >Read More </p>
            </button>
        </div>
    )
}
