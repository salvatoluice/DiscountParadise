import React from 'react'
import { BsSearch } from 'react-icons/bs'

const Header = () => {
  return (
    <div className='w-full py-[30px] px-[100px] bg-white flex justify-between gap-[20px]'>
        <div>
            <p>Discount Paradise</p>
        </div>
        <div className='flex justify-between border-[2px] rounded-sm border-gray-300  pl-[10px]'>
            <input type="text" placeholder='Enter Key Words here...' className='outline-none py-[5px] border-none' />
            <button className='bg-green-500 text-white px-[10px]'><BsSearch /></button>
        </div>
        <div className='flex gap-[10px] '>
            <p>Cart</p>
            <p>Wish List</p>
        </div>
    </div>
  )
}

export default Header
