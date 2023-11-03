import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'
import HeaderMain from '../Header/HeaderMain'
import Logo from '../Images/Logo'
import { BiCopyright } from 'react-icons/bi'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className=' '>
            <div className='bg-gray2 relative py-4 lg:rounded-lg lg:px-16 items-center flex flex-col '>

                <div className='  flex justify-between w-full px-6'>
                    <Logo />
                    <div className='flex items-center lg:space-x-8'>
                        <div className='hidden lg:inline'>
                            <ul className='flex  text-xl lg:space-x-8 px-12'>
                                <Link href={'../../home'}>
                                    <li>
                                        <p className='hover:underline cursor-pointer'>HOME</p>
                                    </li>
                                </Link>
                                <Link href={'../../women-up'}>
                                 <li>
                                    <p className='hover:underline cursor-pointer'>WOMEN UP</p>
                                </li>
                                </Link>
                                <Link href={'../../youth-up'}>
                                  <li>
                                    <p className='hover:underline cursor-pointer'>YOUTH UP</p>
                                </li>
                                </Link>
                                <Link href={'../../contact-us'}>
                                    <li>
                                        <p className='hover:underline cursor-pointer'>CONTACT US</p>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BiCopyright />
                            <p>2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
