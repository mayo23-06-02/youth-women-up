import React from 'react'
import { BiBulb, BiGlobe, BiGroup, BiLeaf } from 'react-icons/bi'
import { FiCalendar, FiClock } from 'react-icons/fi'

export default function InfographicSection_SM() {
    return (
        <div className='px-4'>
            <div className='border-2 border-gray2 bg-gray3 rounded-lg '>
                <div className='px-4 py-6'>
                    <div className='flex items-center border-b-2 border-gray2 '>
                        <div className='  w-full flex flex-col items-center border-r-2 border-gray2  py-4 space-y-2'>
                            <div className='w-full flex flex-col items-center'>
                                <p className='text-4xl text-primary'><BiGroup /></p>
                                <div className='w-full flex flex-col items-center'>
                                    <p className='text-4xl'>20</p>
                                    <div className='-space-y-2'>
                                        <p className=' opacity-70 text-center w-28'>COORPORATIVE</p>
                                        <p className=' opacity-70 text-center w-28'>PARTNERS</p>
                                    </div>
                                </div>
                            </div>
                            <div className='h-1.5 w-8 bg-primary opacity-20' />

                        </div>
                        <div className='  w-full flex flex-col items-center  space-y-2'>
                            <div className='w-full flex flex-col items-center'>
                                <p className='text-4xl text-primary'><BiLeaf /></p>
                                <div className='w-full flex flex-col items-center'>
                                    <div className='flex items-center '>
                                        <p className='font-semibold text-4xl tracking-tighter'>2</p>
                                        <p className='font-semibold text-2xl tracking-tighter opacity-50'>+</p>
                                    </div>
                                    <div className='-space-y-2'>
                                        <p className=' opacity-70 text-center w-28'>YEARS</p>
                                        <p className=' opacity-70 text-center w-28'>ACTIVE</p>
                                    </div>
                                </div>
                            </div>
                            <div className='h-1.5 w-8 bg-primary opacity-20' />
                        </div>
                    </div>
                    <div className='flex items-center  border-gray2  '>
                        <div className='  w-full flex flex-col items-center border-r-2 border-gray2  py-4 space-y-2'>
                            <div className='w-full flex flex-col items-center'>
                                <p className='text-4xl text-primary'><FiCalendar /></p>
                                <div className='w-full flex flex-col items-center'>
                                    <div className='flex items-center '>
                                        <p className='font-semibold text-4xl tracking-tighter'>10</p>
                                        <p className='font-semibold text-2xl tracking-tighter opacity-50'>+</p>
                                    </div>
                                    <div className='-space-y-2'>
                                        <p className=' opacity-70 text-center '>UN SUSTAINABLE</p>
                                        <p className=' opacity-70 text-center '>GOALS</p>
                                    </div>
                                </div>
                            </div>
                            <div className='h-1.5 w-8 bg-primary opacity-20' />

                        </div>
                        <div className='  w-full flex flex-col items-center  space-y-2'>
                            <div className='w-full flex flex-col items-center'>
                                <p className='text-4xl text-primary'><BiGlobe /></p>
                                <div className='w-full flex flex-col items-center'>
                                    <div className='flex items-center '>
                                        <p className='font-semibold text-4xl tracking-tighter'>17</p>
                                        <p className='font-semibold text-2xl tracking-tighter opacity-50'>/22</p>
                                    </div>
                                    <div className='-space-y-2'>
                                        <p className=' opacity-70 text-center '>PARTNERSHIPS &</p>
                                        <p className=' opacity-70 text-center '>COLLABORATIONS</p>
                                    </div>
                                </div>
                            </div>
                            <div className='h-1.5 w-8 bg-primary opacity-20' />

                        </div>
                    </div>
                </div>
                <div className='bg-gray2 px-4 pt-8 space-y-6'>
                    <p className='text-xl font-bold '>Join us in our mission to make a difference in: </p>
                    <div className='flex overflow-x-auto w-[86vw] space-x-4'>
                        <div className=' h-full hover:scale-105 hover:shadow-2xl'>
                            <div className='bg-gray3 px-2  w-full text-7xl flex items-center justify-center h-36  '>
                                <p><BiBulb /></p>
                            </div>
                            <div className='w-[180px] relative px-2  bg-gray3 text-2xl font-bold -space-y-4 py-6 flex flex-col items-center bg-opacity-60'>
                                <p>MENTAL</p>
                                <p>HEALTH</p>
                                <span className='absolute opacity-5 text-2xl -space-y-4 top-5'>
                                    <p>MENTAL</p>
                                    <p>HEALTH</p>
                                </span>
                                <span className='absolute top-3'>
                                    <div className='bg-primary w-8 h-2' />
                                </span>
                            </div>
                        </div>
                        <div className=' h-full w-full hover:scale-105 hover:shadow-2xl'>
                            <div className='bg-gray3 px-2 text-7xl flex items-center justify-center h-36 '>
                                <p><BiBulb /></p>
                            </div>
                            <div className='relative px-2 w-[180px] bg-gray3 text-2xl font-bold -space-y-4 py-6 flex flex-col items-center bg-opacity-60'>
                                <p>ECONOMIC</p>
                                <p>EMPOWERMENT</p>
                                <span className='absolute opacity-5 text-2xl flex items-center flex-col -space-y-4 top-5'>
                                    <p>ECONOMIC</p>
                                    <p>EMPOWERMENT</p>
                                </span>
                                <span className='absolute top-3'>
                                    <div className='bg-primary w-8 h-2' />
                                </span>
                            </div>
                        </div>
                        <div className=' w-full hover:scale-105 hover:shadow-2xl'>
                            <div className='bg-gray3 px-2 text-7xl flex items-center justify-center h-36 '>
                                <p><BiBulb /></p>
                            </div>
                            <div className='relative px-2 bg-gray3 w-[180px] text-2xl font-bold -space-y-4 py-6 flex flex-col items-center bg-opacity-60'>
                                <p>SEXUAL &</p>
                                <p>REPRODUCTIVE</p>
                                <p>HEALTH RIGHTS</p>
                                <span className='absolute opacity-5 text-3xl flex items-center flex-col -space-y- top-2'>
                                    <p>SEXUAL &</p>
                                    <p>REPRODUCTIVE</p>
                                    <p>HEALTH RIGHTS</p>
                                </span>
                                <span className='absolute top-3'>
                                    <div className='bg-primary w-8 h-2' />
                                </span>
                            </div>
                        </div>
                        <div className=' w-full hover:scale-105 hover:shadow-2xl'>
                            <div className='bg-gray3 px-2 text-7xl flex items-center justify-center h-36 '>
                                <p><BiBulb /></p>
                            </div>
                            <div className='relative px-2 bg-gray3 w-[180px] text-2xl font-bold -space-y-4 py-6 flex flex-col items-center bg-opacity-60'>
                                <p>UNLOCKING</p>
                                <p>POTENTIAL</p>
                                <span className='absolute opacity-5 text-3xl flex items-center flex-col -space-y- top-2'>
                                    <p>UNLOCKING</p>
                                    <p>POTENTIAL</p>
                                </span>
                                <span className='absolute top-3'>
                                    <div className='bg-primary w-8 h-2' />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
