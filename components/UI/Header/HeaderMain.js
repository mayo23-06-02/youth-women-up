import React, { useEffect, useState } from 'react'
import Logo from '../Images/Logo'
import NavigationLg from './NavigationLg'
import { BiMenu, BiMenuAltLeft, BiPlusCircle } from 'react-icons/bi'
import Link from 'next/link'
import { Router } from 'next/router'

export default function HeaderMain() {
  const [setshowSideDrawer, setSetshowSideDrawer] = useState(false)

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Router.events.on('routeChangeStart', () => setSetshowSideDrawer(false));
    Router.events.on('routeChangeComplete', () => setSetshowSideDrawer(false));
    Router.events.on('routeChangeError', () => setSetshowSideDrawer(false));
    return () => {
      Router.events.off('routeChangeStart', () => setSetshowSideDrawer(false));
      Router.events.off('routeChangeComplete', () => setSetshowSideDrawer(false));
      Router.events.off('routeChangeError', () => setSetshowSideDrawer(false));
    };
  }, [Router.events]);

  return (
    <div className='header-container relative pt-6'  >
      <Link href={'../'}>
        <Logo />
      </Link>
      <div className='hidden lg:inline'>
        <NavigationLg />
      </div>
      <div className='lg:hidden' onClick={() => {
        setSetshowSideDrawer(true)
      }}>
        <BiMenu className='text-2xl' />
      </div>
      <span className={` h-screen w-screen z-50 fixed top-0 px-6 bg-secondary flex items-center flex-col space-y-12 ${setshowSideDrawer ? "" : "hidden"}`}>
        <div className='w-full flex justify-end' onClick={() => {
          setSetshowSideDrawer(false)
        }}>
          <BiPlusCircle className='rotate-45 text-2xl' />
        </div>
        <ul className='flex flex-col w-full items-center text-2xl space-y-6 font-bold'>
          <Link href={'../'}>
            <li>
              <p>HOME</p>
            </li>
          </Link>
          <Link href={'../../about-us'}>
            <li>
              <p>ABOUT US</p>
            </li>
          </Link>
          <Link href={'../../women-up'}>
          <li>
            <p>WOMEN UP</p>
          </li>
          </Link>
          <li>
            <p>YOUTH UP</p>
          </li>
          <li>
            <p>ABOUT US</p>
          </li>
        </ul>
        <Logo />
      </span>
    </div>
  )
}
