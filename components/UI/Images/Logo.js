import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <div>
        <Image src={'https://res.cloudinary.com/loooktrial/image/upload/v1694648789/Logo_1_saoati.png'} width={100} height={100} alt='Logo' />
    </div>
  )
}
