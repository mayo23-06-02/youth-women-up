import React, { useState } from 'react'
import { BiChat, BiCurrentLocation, BiMessage, BiMessageAlt, BiMessageAltDots, BiPlay } from 'react-icons/bi'

export default function EventsWorkshops() {
    const [option, setOption] = useState(1)
    return (
        <div className=' flex flex-col items-center space-y-12 px-4'>
            <div className=' '>
                <p className='text-5xl tracking-tighter  font-bold'>EVENT & WORKSHOPS</p>
            </div>
            <div className='w-10/12 lg:w-4/12 '>
                <ul className='bg-gray3  border- grid grid-flow-row grid-cols-3 border-gray2 rounded-xl relative'>
                    <li onClick={() => (
                        setOption(2)
                    )} className={`py-2 cursor-pointer hover:bg-gray2 rounded-xl flex items-center justify-center ${option == 2 ? "bg-primary py-3 text-white scale-125 hover:bg-primary" : ""}`}>
                        <p>Campaigns</p>
                    </li>
                    <li onClick={() => (
                        setOption(1)
                    )} className={`py-2 cursor-pointer hover:bg-gray2 rounded-xl flex items-center justify-center ${option == 1 ? "bg-primary py-3 text-white scale-125 hover:bg-primary" : ""}`}>
                        <p>Events</p>
                    </li>
                    <li onClick={() => (
                        setOption(3)
                    )} className={`py-2 cursor-pointer hover:bg-gray2 rounded-xl flex items-center justify-center ${option == 3 ? "bg-primary py-3 text-white scale-125 hover:bg-primary" : ""}`}>
                        <p>Talks</p>
                    </li>
                </ul>
            </div>

            <div className={`${option == 1 ? "" : "hidden"} `}>
                <ul className='border-2 border-gray2 rounded-lg space-y-2 p-2 overflow-auto w-[85vw] lg:w-full'>
                    <li className='bg-gray3 w-full lg:grid grid-flow-row md:grid-cols-7  cursor-pointer hover:bg-gray3 md:h-16 rounded-lg lg:items-center md:pl-8 pl-2 text-lg  flex flex-col items-start'>
                        <div className=' whitespace-nowrap '>
                            <p>07 Jan 2023</p>
                        </div>
                        <div className='col-span-2 ' >
                            <p className='font-semibold text-xl    lg:no-underline underline line-clamp-1 '>ITS UP TO ME</p>
                        </div>
                        <div className='flex items-center space-x-2 justify-center' >
                            <BiCurrentLocation className='text-primary' />
                            <p className='line-clamp-1'>MBABANE </p>
                        </div>
                        <div className='flex items-center space-x-2 col-span-3 lg:pl-6 justify-start' >
                            <BiMessageAltDots className='text-primary ' />
                            <p className=' line-clamp-1 max-w-[300px]'>Launch Proposal & 2023 Prep Picnic (goal setting)</p>
                        </div>
                    </li>
                    <li className='bg-gray3 w-full lg:grid grid-flow-row md:grid-cols-7  cursor-pointer hover:bg-gray3 md:h-16 rounded-lg lg:items-center md:pl-8 pl-2 text-lg  flex flex-col items-start'>
                        <div className=' whitespace-nowrap '>
                            <p>22 Apr 2023</p>
                        </div>
                        <div className='col-span-2' >
                            <p className='font-semibold text-xl    lg:no-underline underline line-clamp-1'>BEING KIND TO YOURSELF AS YOU REACH YOUR GOALS</p>
                        </div>
                        <div className='flex items-center space-x-2 justify-center' >
                            <BiCurrentLocation className='text-primary' />
                            <p className='line-clamp-1'>MBABANE </p>
                        </div>
                        <div className='flex items-center space-x-2 col-span-3 lg:pl-6 justify-start' >
                            <BiMessageAltDots className='text-primary ' />
                            <p className=' line-clamp-1 max-w-[300px]'>Mental Health, Reaching Goals</p>
                        </div>
                    </li>
                    <li className='bg-gray3 w-full lg:grid grid-flow-row md:grid-cols-7  cursor-pointer hover:bg-gray3 md:h-16 rounded-lg lg:items-center md:pl-8 pl-2 text-lg  flex flex-col items-start'>
                        <div className=' whitespace-nowrap '>
                            <p>29 Apr 2023</p>
                        </div>
                        <div className='col-span-2' >
                            <p className='font-semibold text-xl    lg:no-underline underline line-clamp-1'>PERSONAL FINANCIAL MANAGEMENT</p>
                        </div>
                        <div className='flex items-center space-x-2 justify-center' >
                            <BiCurrentLocation className='text-primary' />
                            <p className='line-clamp-1'>MBABANE </p>
                        </div>
                        <div className='flex items-center space-x-2 col-span-3 lg:pl-6 justify-start' >
                            <BiMessageAltDots className='text-primary ' />
                            <p className=' line-clamp-1 max-w-[300px]'>What is feminism?</p>
                        </div>
                    </li>
                    <li className='bg-gray3 w-full lg:grid grid-flow-row md:grid-cols-7  cursor-pointer hover:bg-gray3 md:h-16 rounded-lg lg:items-center md:pl-8 pl-2 text-lg  flex flex-col items-start'>
                        <div className=' whitespace-nowrap '>
                            <p>13 May 2023</p>
                        </div>
                        <div className='col-span-2' >
                            <p className='font-semibold text-xl    lg:no-underline underline line-clamp-1'>HEALING FROM GRIEF</p>
                        </div>
                        <div className='flex items-center space-x-2 justify-center' >
                            <BiCurrentLocation className='text-primary' />
                            <p className='line-clamp-1'>MBABANE </p>
                        </div>
                        <div className='flex items-center space-x-2 col-span-3 lg:pl-6 justify-start' >
                            <BiMessageAltDots className='text-primary ' />
                            <p className=' line-clamp-1 max-w-[300px]'>Mental Health, Healing from grief</p>
                        </div>
                    </li>
                    <li className='bg-gray3 w-full lg:grid grid-flow-row md:grid-cols-7  cursor-pointer hover:bg-gray3 md:h-16 rounded-lg lg:items-center md:pl-8 pl-2 text-lg  flex flex-col items-start'>
                        <div className=' whitespace-nowrap '>
                            <p>24 Jun 2023</p>
                        </div>
                        <div className='col-span-2' >
                            <p className='font-semibold text-xl    lg:no-underline underline line-clamp-1'>BOUNDARIES & SELF CONFIDENCE</p>
                        </div>
                        <div className='flex items-center space-x-2 justify-center' >
                            <BiCurrentLocation className='text-primary' />
                            <p className='line-clamp-1'>MBABANE </p>
                        </div>
                        <div className='flex items-center space-x-2 col-span-3 lg:pl-6 justify-start' >
                            <BiMessageAltDots className='text-primary ' />
                            <p className=' line-clamp-1 max-w-[300px]'>Mental Health, Self Awareness</p>
                        </div>
                    </li>
                    <li className='bg-gray3 w-full lg:grid grid-flow-row md:grid-cols-7  cursor-pointer hover:bg-gray3 md:h-16 rounded-lg lg:items-center md:pl-8 pl-2 text-lg  flex flex-col items-start'>
                        <div className=' whitespace-nowrap '>
                            <p>15-16 JuL 2023</p>
                        </div>
                        <div className='col-span-2' >
                            <p className='font-semibold text-xl    lg:no-underline underline line-clamp-1'>SELF BELIEF GIRLS TRIP</p>
                        </div>
                        <div className='flex items-center space-x-2 justify-center' >
                            <BiCurrentLocation className='text-primary' />
                            <p className='line-clamp-1'>MBABANE </p>
                        </div>
                        <div className='flex items-center space-x-2 col-span-3 lg:pl-6 justify-start' >
                            <BiMessageAltDots className='text-primary ' />
                            <p className=' line-clamp-1 max-w-[300px]'>Reaching your full potential</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={`${option == 2 ? "" : "hidden"}`}>
                <div>
                    <p>No Campaigns Yet</p>
                </div>
            </div>
            <div className={`${option == 3 ? "" : "hidden"} `}>
                <ul className='border-2 border-gray2 rounded-lg md:space-y-2 p-2  space-y-2  w-[85vw] lg:w-full'>
                    <li className='bg-gray3 w-full lg:grid grid-flow-row md:grid-cols-7  cursor-pointer hover:bg-gray3 md:h-16 rounded-lg lg:items-center md:pl-8 pl-2 text-lg  flex flex-col items-start'>
                        <div className=' whitespace-nowrap '>
                            <p>07 Jan 2023</p>
                        </div>
                        <div className='col-span-2 ' >
                            <p className='font-semibold text-xl    lg:no-underline underline line-clamp-1 '>ITS UP TO ME</p>
                        </div>
                        <div className='flex items-center space-x-2 justify-center' >
                            <BiCurrentLocation className='text-primary' />
                            <p className='line-clamp-1'>MBABANE </p>
                        </div>
                        <div className='flex items-center space-x-2 col-span-3 lg:pl-6 justify-start' >
                            <BiMessageAltDots className='text-primary ' />
                            <p className=' line-clamp-1 max-w-[300px]'>Launch Proposal & 2023 Prep Picnic (goal setting)</p>
                        </div>
                    </li>
                    <li className='bg-gray3 w-full lg:grid grid-flow-row md:grid-cols-7  cursor-pointer hover:bg-gray3 md:h-16 rounded-lg lg:items-center md:pl-8 pl-2 text-lg  flex flex-col items-start'>
                        <div className=' whitespace-nowrap '>
                            <p>22 Apr 2023</p>
                        </div>
                        <div className='col-span-2' >
                            <p className='font-semibold text-xl    lg:no-underline underline line-clamp-1'>BEING KIND TO YOURSELF AS YOU REACH YOUR GOALS</p>
                        </div>
                        <div className='flex items-center space-x-2 justify-center' >
                            <BiCurrentLocation className='text-primary' />
                            <p className='line-clamp-1'>MBABANE </p>
                        </div>
                        <div className='flex items-center space-x-2 col-span-3 lg:pl-6 justify-start' >
                            <BiMessageAltDots className='text-primary ' />
                            <p className=' line-clamp-1 max-w-[300px]'>Mental Health, Reaching Goals</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
