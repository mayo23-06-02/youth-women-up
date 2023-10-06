import Link from 'next/link'
import React from 'react'

export default function NavigationLg() {
    return (
        <div>
            <ul className='navigation-list'>
                <Link href={'../../'} >
                    <li className='navigation-item'>
                        <p>HOME</p>
                        <span className='outer-dot'>
                            <div className='inner-dot' />
                        </span>
                    </li>
                </Link>
                <Link href={'../../about-us'} >
                    <li className='navigation-item'>
                        <p>ABOUT US</p>
                        <span className='outer-dot'>
                            <div className='inner-dot' />
                        </span>
                    </li>
                </Link>
                <Link href={'../../women-up'} >
                <li className='navigation-item'>
                    <p>WOMEN UP</p>
                    <span className='outer-dot'>
                        <div className='inner-dot' />
                    </span>
                </li>
                </Link>
                <li className='navigation-item'>
                    <p>YOUTH UP</p>
                    <span className='outer-dot'>
                        <div className='inner-dot' />
                    </span>
                </li>
                <li className='navigation-item'>
                    <p>CONTACT US</p>
                </li>
            </ul>
        </div>
    )
}
