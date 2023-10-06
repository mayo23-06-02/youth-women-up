import React from 'react'
import { BiPlay } from 'react-icons/bi'
import Logo from '../../Images/Logo'
import { useRouter } from 'next/router'

export default function AboutUs_SM() {
    const router = useRouter()
    return (
        <div>
            <div className='w-full px-4  '>
                <div className='bg-gray3 z-0 px-4  border-4 pt-6 pb-16 border-gray2 rounded-lg flex flex-col  justify-center relative '>
                    <div className=' flex flex-col items-center'>
                        <div>
                            <div className='bg-gray3 z-10 w-full space-y-6 pb-8    pt-6   rounded-lg  flex flex-col  col-span-2'>
                                <div className=' -space-y-16
                     '>
                                    <span className=' flex justify-start opacity-20'>
                                        <p className='text-6xl'>&quot;</p>
                                    </span>
                                    <div className='-space-y-2 text-3xl tracking-tighter px-8 font-bold'>
                                        <p>PROFFESSIONAL AND</p>
                                        <p>PERSONAL DEVELOPMENT</p>
                                        <p>FOR THE YOUTH</p>
                                    </div>
                                </div>
                                <div className='w-full justify-center flex items-center'>
                                    <Logo />
                                </div>
                            </div>
                        </div>
                        <div className='space-y-2 text-2xl tracking-tighter  font-bold'>
                            <p>Youth & Women Up</p>
                            <div>
                                <p className='opacity-80 tracking-normal font-normal text-base'>Welcome to &quot;Youth and Woman Up&quot;–an energetic non-governmental organization committed to championing the rights and welfare of youth and women by focusing on Mental Health, Economic Empowerment, and Sexual and Reproductive Health Rights. </p>
                            </div>
                            <p>Mission</p>
                            <p className='opacity-80 tracking-normal font-normal text-base'>Our mission is to empower individuals, regardless of gender or age, to reach their full potential and contribute to an inclusive society. Since our establishment in 2020, we have tirelessly worked towards gender equality, empowerment, and social justice.</p>
                            <p>VISION</p>
                            <p className='opacity-80 tracking-normal font-normal text-base'>Create a world where every youth and young
                                woman has access to the resources and
                                support they need to thrive.</p>
                        </div>
               
                    </div>
                    <div className=' pt-8 w-8/22 flex justify-end relative'>
                        <div className='landing-button-container '>
                            <button onClick={() => router.push('../../about-us')} className=' landing-button right-0'>
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
