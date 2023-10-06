import React from 'react'
import { BiBulb, BiCalendarEvent, BiGroup, BiLeaf } from 'react-icons/bi'
import { FiCalendar, FiClock, FiGlobe } from 'react-icons/fi'


export default function InfographicSection() {
    return (
        <div className='border-4 border-gray2 bg-gray3 rounded-lg border-b-0 '>
            <div>
                <ul className='flex h-96'>
                    <li className='flex flex-col py-16 space-y-16 hover:bg-conventional hover:border-b-[96px] hover:-bg-opacity-50 rounded-lg hover:border-4 hover:-translate-x-6 hover:shadow-2xl hover:-translate-y-8 border-primary  w-full items-center '>
                        <div className='flex items-center flex-col space-y-6'>
                            <p className='text-4xl text-primary'><BiGroup /></p>
                            <div className='flex flex-col items-center'>
                                <p className='font-bold text-6xl tracking-tighter'>20</p>
                                <div className='-space-y-2'>
                                    <p className='lg:text-xl opacity-70 text-center w-28'>COORPORATIVE</p>
                                    <p className='lg:text-xl opacity-70 text-center w-28'>PARTNERS</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-1.5 w-8 bg-primary opacity-20' />

                    </li>
                    <li className='flex flex-col py-16 space-y-16 hover:bg-conventional hover:border-b-[96px] hover:-bg-opacity-50 rounded-lg hover:border-4 hover:-translate-x-6 hover:shadow-2xl hover:-translate-y-8 border-primary  w-full items-center '>
                        <div className='flex items-center flex-col space-y-6'>
                            <p className='text-4xl text-primary'><BiLeaf /></p>
                            <div className='flex flex-col items-center'>
                                <div className='flex items-center '>
                                    <p className='font-bold text-6xl tracking-tighter'>2</p>
                                    <p className='font-bold text-4xl tracking-tighter opacity-50'>+</p>
                                </div>
                                <div className='-space-y-2'>
                                    <p className='lg:text-xl opacity-70 text-center w-28'>YEARS</p>
                                    <p className='lg:text-xl opacity-70 text-center w-28'>ACTIVE</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-1.5 w-8 bg-primary opacity-20' />

                    </li>
                    <li className='flex flex-col py-16 space-y-16 hover:bg-conventional hover:border-b-[96px] hover:-bg-opacity-50 rounded-lg hover:border-4 hover:-translate-x-6 hover:shadow-2xl hover:-translate-y-8 border-primary  w-full items-center '>
                        <div className='flex items-center flex-col space-y-6'>
                            <p className='text-4xl text-primary'><FiCalendar /></p>
                            <div className='flex flex-col items-center'>
                                <div className='flex items-center '>
                                    <p className='font-bold text-6xl tracking-tighter'>10</p>
                                    <p className='font-bold text-4xl tracking-tighter opacity-50'>+</p>
                                </div>
                                <div className='-space-y-2'>
                                    <p className='lg:text-xl opacity-70 text-center '>EVENTS & MEETING</p>
                                    <p className='lg:text-xl opacity-70 text-center '>HOSTED THIS YEAR</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-1.5 w-8 bg-primary opacity-20' />

                    </li>
                    <li className='flex flex-col py-16 space-y-16 hover:bg-conventional hover:border-b-[96px] hover:-bg-opacity-50 rounded-lg hover:border-4 hover:-translate-x-6 hover:shadow-2xl hover:-translate-y-8 border-primary  w-full items-center '>
                        <div className='flex items-center flex-col space-y-6'>
                            <p className='text-4xl text-primary'><FiGlobe /></p>
                            <div className='flex flex-col items-center'>
                                <div className='flex items-center '>
                                    <p className='font-bold text-6xl tracking-tighter'>4</p>
                                    <p className='font-bold text-4xl tracking-tighter opacity-50'>+</p>
                                </div>
                                <div className='-space-y-2'>
                                    <p className='lg:text-xl text-xs opacity-70 text-center '>PARTNERSHIPS &</p>
                                    <p className='lg:text-xl text-xs opacity-70 text-center '>COLLABORATIONS</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-1.5 w-8 bg-primary opacity-20' />

                    </li>
                </ul>
                <div className='bg-gray2 grid grid-cols-7 grid-flow-row rounded-lg'>
                    <div className='col-span-4 px-24 pt-24 space-y-12'>
                        <div className='-space-y-2 lg:text-5xl whitespace-nowrap font-bold '>
                            <p>JOIN US IN OUR MISSION</p>
                            <p>TO MAKE A DIFFRENCE.</p>
                        </div>
                        <div className='space-y-16 '>
                            <ul className='flex items-center space-x-4 w-full '>
                                <li className=' w-96 hover:scale-105 hover:shadow-2xl'>
                                    <div className='bg-gray3 text-7xl flex items-center justify-center h-36 '>
                                        <p><BiBulb /></p>
                                    </div>
                                    <div className='relative bg-gray3 text-2xl font-bold h-20 w-48 -space-y-4 justify-center flex flex-col items-center bg-opacity-60'>
                                        <p>MENTAL</p>
                                        <p>HEALTH</p>
                                        <span className='absolute opacity-5 text-3xl -space-y- top-2'>
                                            <p>MENTAL</p>
                                            <p>HEALTH</p>
                                        </span>
                                        <span className='absolute top-3'>
                                            <div className='bg-primary w-8 h-2' />
                                        </span>
                                    </div>
                                </li>
                                <li className='w-full hover:scale-105 hover:shadow-2xl'>
                                    <div className='bg-gray3 text-7xl flex items-center justify-center h-36 '>
                                        <p><BiBulb /></p>
                                    </div>
                                    <div className='relative w-48 bg-gray3 text-2xl font-bold h-20 -space-y-4 justify-center flex flex-col items-center bg-opacity-60'>
                                        <p>ECONOMIC</p>
                                        <p>EMPOWERMENT</p>
                                        <span className='absolute opacity-5 text-2xl -space-y- top-2'>
                                            <p>ECONOMIC</p>
                                            <p>EMPOWERMENT</p>
                                        </span>
                                        <span className='absolute top-3'>
                                            <div className='bg-primary w-8 h-2' />
                                        </span>
                                    </div>
                                </li>
                                <li className='w-full hover:scale-105 hover:shadow-2xl'>
                                    <div className='bg-gray3 text-7xl flex items-center justify-center h-36 '>
                                        <p><BiBulb /></p>
                                    </div>
                                    <div className='relative w-48 bg-gray3 text-2xl font-bold -space-y-4 h-20 justify-center flex flex-col items-center bg-opacity-60'>
                                    <p>SEXUAL &</p>
                                    <p>REPRODUCTIVE</p>
                                    <p>HEALTH RIGHTS</p>
                                        <span className='absolute opacity-5 text-2xl -space-y- flex items-center flex-col top-2'>
                                        <p>SEXUAL &</p>
                                        <p>REPRODUCTIVE</p>
                                        <p>HEALTH RIGHTS</p>
                                        </span>
                                        <span className='absolute top-3'>
                                            <div className='bg-primary w-8 h-2' />
                                        </span>
                                    </div>
                                </li>
                            </ul>
                            <div className='h-2 w-full bg-primary' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
