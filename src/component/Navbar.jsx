import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='flex justify-between bg-gray-800 py-2 px-5 text-white'>
            <h1 className=''>
                Navbar
            </h1>
            <ul className='flex gap-4'>
                <Link href={'/'}>
                    <li >Home</li>
                </Link>
                <Link href={'/about'}>
                    <li >About</li>
                </Link>
                <Link href={'/about/profile'}>
                    <li >Profile</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar