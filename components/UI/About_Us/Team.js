import Image from 'next/image'
import React from 'react'

//Photos

import Afua from '../../../assets/images/Afua.jpg'
import Alice from '../../../assets/images/Alice 2.jpg'
import Bongikile from '../../../assets/images/Bongikile.jpg'
import Dalingcebo from '../../../assets/images/Dalingcebo.jpg'
import Dorothy from '../../../assets/images/Dorothy.jpg'
import Emefa from '../../../assets/images/Emefa.jpg'
import hlengiwe from '../../../assets/images/hlengiwe.jpg'
import Nkhosingiphile from '../../../assets/images/Nkhosingiphile.jpg'
import Nolwazi from '../../../assets/images/Nolwazi.jpg'
import Nosifiso from '../../../assets/images/Nosifiso.jpg'
import Reynee from '../../../assets/images/Reynee.jpg'
import Wachira from '../../../assets/images/Wachira.jpg'



export default function Team() {
    return (
        <div className=' text-base grid space-x-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <div className='pb-4 flex flex-col items-start space-y-2'>
                <Image alt='' src={Afua} width={200} height={200} className='rounded' />
                <div>
                    <p className='opacity-80'>AFUA</p>
                </div>
            </div>
            <div className='pb-4 flex flex-col items-start space-y-2'>
                <Image alt='' src={Alice} width={200} height={200} className='rounded' />
                <div>
                    <p className='opacity-80'>ALICE</p>
                </div>
            </div>
            <div className='pb-4 flex flex-col items-start space-y-2'>
                <Image alt='' src={Bongikile} width={200} height={200} className='rounded' />
                <div>
                    <p className='opacity-80'>BONGEKILE</p>
                </div>
            </div>
            <div className='pb-4 flex flex-col items-start space-y-2'>
                <Image alt='' src={Dalingcebo} width={200} height={200} className='rounded' />
                <div>
                    <p className='opacity-80'>DALINGCEBO</p>
                </div>
            </div>
            <div className='pb-4 flex flex-col items-start space-y-2'>
                <Image alt='' src={Dorothy} width={200} height={200} className='rounded' />
                <div>
                    <p className='opacity-80'>Dorothy</p>
                </div>
            </div>
            <div className='pb-4 flex flex-col items-start space-y-2'>
                <Image alt='' src={Emefa} width={200} height={200} className='rounded' />
                <div>
                    <p className='opacity-80'>EMEFA</p>
                </div>
            </div>
            <div className='pb-4 flex flex-col items-start space-y-2'>
                <Image alt='' src={hlengiwe} width={200} height={200} className='rounded' />
                <div>
                    <p className='opacity-80'>HLENGIWE</p>
                </div>
            </div>
            <div className='pb-4 flex flex-col items-start space-y-2'>
                <Image alt='' src={Nkhosingiphile} width={200} height={200} className='rounded' />
                <div>
                    <p className='opacity-80'>NKHOSINGIPHILE</p>
                </div>
            </div>
            <div className='pb-4 flex flex-col items-start space-y-2'>
                <Image alt='' src={Nolwazi} width={200} height={200} className='rounded' />
                <div>
                    <p className='opacity-80'>NOLWAZI</p>
                </div>
            </div>
            <div className='pb-4 flex flex-col items-start space-y-2'>
                <Image alt='' src={Nosifiso} width={200} height={200} className='rounded' />
                <div>
                    <p className='opacity-80'>NOSIFISO</p>
                </div>
            </div>
            <div className='pb-4 flex flex-col items-start space-y-2'>
                <Image alt='' src={Reynee} width={200} height={200} className='rounded' />
                <div>
                    <p className='opacity-80'>REYNEE</p>
                </div>
            </div>
            <div className='pb-4 flex flex-col items-start space-y-2'>
                <Image alt='' src={Wachira} width={200} height={200} className='rounded' />
                <div>
                    <p className='opacity-80'>Wema</p>
                </div>
            </div>
        </div>
    )
}
