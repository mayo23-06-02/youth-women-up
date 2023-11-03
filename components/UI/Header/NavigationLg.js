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
                <Link href={'../../women-up'} >
                    <li className='navigation-item'>
                        <p>WOMEN UP</p>
                        <span className='outer-dot'>
                            <div className='inner-dot' />
                        </span>
                    </li>
                </Link>
                <Link href={'../../youth-up'} >
                    <li className='navigation-item'>
                        <p>
                        YOUTH UP</p>
                        <span className='outer-dot'>
                            <div className='inner-dot' />
                        </span>
                    </li>
                </Link>
                <Link href={'../../contact-us'} >
                    <li className='navigation-item'>
                        <p>CONTACT US</p>
                    </li>
                </Link>
                
            </ul>
        </div>
    )
}
