import Image from 'next/image'
import React from 'react'
import Item from '../../../assets/images/image-1.png'
import Item2 from '../../../assets/images/About.jpg'
import Team from './Team'
import { BiEnvelope, BiPhoneCall } from 'react-icons/bi'


export default function AboutComponent() {
    return (
        <div className='px-4 space-y-12'>
            <div className='flex lg:justify-between flex-col lg:flex-row '>
                <div>
                    <p className='flex text-2xl lg:text-4xl font-bold '>CONTACT US</p>
                </div>

            </div>
            <div>
                <Image className='rounded-lg' src={Item2} width={1500} height={200} alt='' />

            </div>
            <div className='h-0.5  bg-gray2 w-full' />
            <div className='lg:grid grid-cols-5 grid-flow-row'>
                <div className='text-2xl lg:text-4xl font-bold flex items-center  lg:items-start space-x-3 lg:-space-y-2 col-span-2 lg:flex-col lg:space-x-0' >
                    <p>Connect with us</p>
                </div>
                <div className=' space-y-8 p-4 py-2 col-span-3 flex-col flex items-start justify-start rounded-lg'>
                    <p>Thank you for your interest in Youth and Women UP! We would love to hear from you. Whether you have a question, suggestion, or would like to collaborate with us, please feel free to reach out using the contact information provided below. Our dedicated team is here to assist you and provide any information you may need.z</p>
                    <div className='flex space-x-6'>
                        <div className='flex bg-gray3 p-1 rounded items-center space-x-3'>
                            <BiEnvelope className='text-2xl opacity-60' />
                            <p className='text-xl'>info@youthwomenup.org</p>
                        </div>
                        <div className='flex items-center  bg-gray3 p-1 rounded space-x-3'>
                            <BiPhoneCall className='text-2xl opacity-60' />
                            <p className='text-xl'>+268 0000 0000</p>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}
