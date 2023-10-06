import React from 'react'
import { BiChevronLeft, BiChevronRight, BiSolidStar, BiStar } from 'react-icons/bi'
import Logo from '../../Images/Logo'




export default function Reviews() {
    return (
        <div className=' flex flex-col items-center w-full space-y-14'>
            <div className=''>
                <p className='text-5xl tracking-tighter  font-bold'>REVIEWS</p>
            </div>
            <div className='w-10/12 flex items-center lg:flex-row flex-col-reverse'>
                <div className='lg:w-5/12 w-10/12 max-h-64 bg-gray2 rounded-l-lg'>
                    <div className='hidden lg:inline'>
                        <div className=' bg-gray3 rounded-l-lg -space-y-4 py-6  text-2xl w-full flex flex-col items-center'>
                            <p>MEMBERS</p>
                            <p>REVIEWS</p>
                        </div>
                    </div>
                    <div className=' flex items-center flex-col justify-center py-6 w-full'>
                        <div className='w-full flex justify-center flex-col items-center'>
                            <div className=' w-8/12  '>
                                <ul className='bg-gray3  border- grid grid-flow-row grid-cols-3 border-gray2 rounded-xl relative'>
                                    <li className={`py-2 cursor-pointer hover:bg-gray2 rounded-xl flex items-center justify-center`}>
                                        <BiChevronLeft />
                                    </li>
                                    <li className={`py-2 cursor-pointer bg-primary scale-110 text-white rounded-xl flex items-center justify-center`}>
                                        <p>1</p>
                                    </li>
                                    <li className={`py-2 cursor-pointer hover:bg-gray2 rounded-xl flex items-center justify-center`}>
                                        <BiChevronRight />
                                    </li>
                                </ul>
                            </div>
                            <div className=''>
                                <div className='flex space-y-4 items-center space-x-2'>
                                    <BiSolidStar />
                                    <div className='-space-y-3'>
                                        <p>OVERALL</p>
                                        <p>RATING</p>
                                    </div>
                                    <p className='font-bold text-primary text-2xl'>4.8</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-full'>
                    <div className='flex relative flex-col pt-16 pb-8 space-y-8 bg-conventional border-b-[116px] bg-opacity-50 rounded-lg border-[6px]   border-primary  w-full items-center '>
                        <div className='flex items-center flex-col space-y-6 w-full'>
                            <div className='flex flex-col items-center w-full'>

                                <div className='-space-y-2 w-full relative flex items-center justify-center'>
                                    <span className='absolute left-10 -top-10 flex justify-start opacity-20'>
                                        <p className='text-8xl'>"</p>
                                    </span>
                                    <p className='text-lg text-black  text-center w-8/12'>Thank God that I found Youth & Women UP on
                                        social media. For me it as a personal touch, unique
                                        approach to problem solving, I am totally excited
                                        with my membership</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-1.5 w-8 bg-primary opacity-20' />
                        <span className='flex w-full absolute lg:space-x-16 lg:left-16 -bottom-20'>
                            <div className=''>
                                <Logo />
                            </div>
                            <div className='text-secondary flex-col flex items-center -space-y-2'>
                                <p className='lg:text-2xl'>JOHN DOE</p>
                                <p>Member</p>
                            </div>
                        </span>
                    </div>
                </div>

            </div>


        </div>
    )
}
