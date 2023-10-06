import Image from 'next/image'
import localFont from '@next/font/local'
import HomeMain from '@/components/UI/Home/HomeMain'

const platelet = localFont({
  src: '../public/fonts/Platelet.otf',
  variable: '--font-platelet',
})

const poppins = localFont({
  src: '../public/fonts/Poppins-SemiBold.otf',
  variable: '--font-poppins',
})

export default function Home() {
  return (
    <main
      className={`home ${platelet.className}`}
    >
      <div className='home-main'>
        <HomeMain />
      </div>
    </main>
  )
}
