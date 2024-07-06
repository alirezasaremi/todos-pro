'use client'

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-sky-500 h-20 p-6'>
        <nav className='text-white flex flex-row gap-3'>
            <Link href={'/'}>Home</Link>
            <Link href={'/todos/new'}>Add Task</Link>
        </nav>
    </div>
  )
}

export default Navbar