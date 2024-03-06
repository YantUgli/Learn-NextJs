'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const disableNavbar = ['/login', '/register']

function Navbar() {
    const router = useRouter()
    const pathName = usePathname()
    console.log(pathName);
    return (
        !disableNavbar.includes(pathName) &&
        <nav className='flex justify-between bg-gray-800 py-2 px-5 text-white'>
            <h1 className=''>
                Navbar Yant
            </h1>
            <ul className='flex gap-4'>
                <Link href={'/'}>
                    <li className={`${pathName == '/' ? 'text-blue-300' : ''}`} >Home</li>
                </Link>
                <Link href={'/about'}>
                    <li className={`${pathName == '/about' ? 'text-blue-300' : ''}`} >About</li>
                </Link>
                <Link href={'/about/profile'}>
                    <li className={`${pathName == '/about/profile' ? 'text-blue-300' : ''}`} >Profile</li>
                </Link>
            </ul>
            <button className='bg-white text-black px-4 rounded-md' onClick={() => router.push('/login')}>
                Login
            </button>
        </nav>

    )
}

export default Navbar