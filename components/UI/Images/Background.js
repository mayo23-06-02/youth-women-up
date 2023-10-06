import Image from 'next/image'
import React from 'react'

export default function Background() {
    return (
        <div className='background-container'>
            <div className='grid grid-cols-7'>
                <div className=' col-span-3 ' />
                    <Image alt='' src={'https://res.cloudinary.com/loooktrial/image/upload/v1694686807/Logo_2_3_1_2_1_pqls0y.png '} width={100} height={100} />
            </div>
            <div className='grid grid-cols-7 pb-24'>
                    <Image alt='' src={'https://res.cloudinary.com/loooktrial/image/upload/v1694687285/Logo_2_3_1_1_vr58eh.png'} width={150} height={200} />
            </div>
            <div className='grid grid-cols-6 mt-20'>
                <div className=' col-span-1 ' />
                    <Image alt='' src={'https://res.cloudinary.com/loooktrial/image/upload/v1694687378/Logo_2_1_pzeyfi.png'} width={300} height={300} />
            </div>
        </div>
    )
}
