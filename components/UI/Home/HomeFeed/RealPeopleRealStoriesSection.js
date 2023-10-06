import React from 'react'
import { BiPlay } from 'react-icons/bi'

import Bongikile from '../../../../assets/images/Bongikile.jpg'
import Dalingcebo from '../../../../assets/images/Dalingcebo.jpg'
import Alice from '../../../../assets/images/Alice 2.jpg'

import Image from 'next/image'
import { useRouter } from 'next/router'

export default function RealPeopleRealStoriesSection() {

    const router = useRouter()

    return (
        <div className='px-4 lg:grid relative grid-flow-row grid-cols-2  lg:space-x-12 w-full lg:space-y-0 space-y-12  pb-24'>
            <div className='space-y-6 flex flex-col w-full  '>
                <div className='-space-y-2 text-3xl lg:text-5xl tracking-tighter  font-bold'>
                    <p>REAL PEOPLE,</p>
                    <p>REAL STORIES</p>
                </div>
                <div className='relative '>
                    <div className=' rounded-lg z-10  bg-gray3 border-[6px] border-primary w-full'>
                        <Image src={Bongikile} width={800} height={400} />
                    </div>
                </div>
                <div className='space-y-2'>
                    <p className='font-bold text-2xl tracking-tight'>BONGEKILE</p>
                    <p>I am now a free, flexible, and relaxed person who enjoys talking about anything and have
                        learnt to trust people back, a step at a time.
                    </p>
                </div>
                <div className='flex   items-center justify-center px-6  py-2 rounded-lg space-x-8 bg-gray2 '>
                    <p>Emotional Support</p>
                    <p>|</p>
                    <p>Healing Session</p>
                </div>
            </div>
            <div className=' space-y-6 flex flex-col'>
                <div className='relative'>
                    <div className=' rounded-lg z-10  bg-gray3 border-[6px] border-primary w-full'>
                        <Image src={Alice} width={800} height={400} />
                    </div>
                </div>
                <div className='space-y-2'>
                    <p className='font-bold text-2xl tracking-tight'>ALICE</p>
                    <p>
                        The very first session we had,it showed a great starting point which was not just for me ,but also the entire group of ladies that we actually can attain what we want if we keep striving,it's the first time I truly felt women empowerment and learned a lot from the guest speakers there, they really make you want to keep striving to be the best despite the situations we come across in our lives.
                    </p>
                </div>
                <div className='flex   items-center justify-center px-6  py-2 rounded-lg space-x-8 bg-gray2 '>
                    <p>Emotional Support</p>
                    <p>|</p>
                    <p>Healing Session</p>
                </div>
            </div>
            <button onClick={() => router.push('../../women-up')} className=' landing-button lg:right-0 right-4  bottom-0'>
                <div className='landing-play' >
                    <BiPlay className='text-2xl' />
                </div>
                <p >Read More </p>
            </button>
        </div>
    )
}
