import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div className='w-full bg-gray-200 flex py-[10px] items-center justify-between px-[100px]'>
        <div className='flex gap-[20px]'>
            <Link className='flex gap-[2px] text-[14px]'>Discount Guide</Link>
            <Link className='flex gap-[2px] text-[14px]'>Customer Assistance</Link>
        </div>
        <div className='flex gap-[10px]'>
            <Link className='text-[15px] '>Sign In</Link>
            <Link className='text-[15px] '>Sign Up</Link>
        </div>
    </div>
  )
}

export default TopBar
