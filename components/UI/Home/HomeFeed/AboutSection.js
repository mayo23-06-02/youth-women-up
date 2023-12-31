import React from 'react'
import Logo from '../../Images/Logo'
import Image from 'next/image'
import { BiPlay } from 'react-icons/bi'

export default function AboutSection() {
    return (
        <div className='-space-y-1'>
            <div className='w-full grid-cols-4 grid  grid-flow-row'>
                <div className='bg-gray3 z-10 w-full space-y-10 border-4 rounded-b-none border-b-0  pt-6  px-4 border-gray2 rounded-lg  flex flex-col  col-span-2'>
                    <div className=' -space-y-16
                 '>
                        <span className=' flex justify-start opacity-20'>
                            <p className='text-8xl'>&quot;</p>
                        </span>
                        <div className='-space-y-2 text-4xl tracking-tighter px-12 font-bold'>
                            <p>PERSONAL AND</p>
                            <p>ECONOMIC DEVELOPMENT</p>
                            <p>FOR THE YOUTH</p>
                        </div>
                    </div>
                    <div className='w-full justify-center flex items-center'>
                        <Logo />
                    </div>
                </div>

            </div>
            <div className='w-full  '>
                <div className='bg-gray3 z-0  border-4 py-16 border-gray2 rounded-lg flex flex-col px-16 justify-center relative '>
                    <div className=' grid grid-flow-col grid-cols-2 space-x-6 w-full
                 '>
                        <div className='space-y-2 text-4xl tracking-tighter w-full  font-bold'>
                            <p>MISSION</p>
                            <p className='opacity-80 tracking-normal font-normal text-xl'>Our mission is to empower individuals, regardless of gender or age, to reach their full potential and contribute to an inclusive society. Since our establishment in 2020, we have tirelessly worked towards gender equality, youth empowerment, and social justice.</p>
                        </div>
                        <div className=' text-4xl tracking-tighter space-y-2  font-bold'>
                            <p>VISION</p>
                            <p className='opacity-80 tracking-normal font-normal text-xl'>Create a world where every youth and young woman has access to the resources and support they need to thrive!</p>
                        </div>

                    </div>
                    <div className='pt-6 text-4xl tracking-tighter space-y-2  font-bold'>
                        <p></p>
                        <p className='opacity-80 tracking-normal font-normal text-xl'>At our core, we are a youth-led organization with a bold mission: to create an inclusive society where every individual, regardless of gender or age, has the opportunity to reach their full potential. Our approach is rooted in collaboration, co-creation, education, and advocacy, recognizing that sustainable change is born from informed dialogue and comprehensive programs addressing the diverse challenges faced by youth and women.</p>
                    </div>
                    <div className=' pt-8 w-8/22 flex justify-end relative'>
                        <div className='landing-button-container '>
                            <button className=' landing-button right-0'>
                                <div className='landing-play' >
                                    <BiPlay className='text-2xl' />
                                </div>
                                <p >Learn More</p>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
