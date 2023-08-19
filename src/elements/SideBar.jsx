import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='flex flex-col bg-white rounded-md w-[20%]'>
      <Link className='flex gap-[4px] px-[15px] py-[10px] text-[#666666] text-[14px] border-b border-gray-200'>FOOD & DRINK</Link>
      <Link className='flex gap-[4px] px-[15px] py-[10px] text-[#666666] text-[14px] border-b border-gray-200'>EVENTS</Link>
      <Link className='flex gap-[4px] px-[15px] py-[10px] text-[#666666] text-[14px] border-b border-gray-200'>BEAUTY</Link>
      <Link className='flex gap-[4px] px-[15px] py-[10px] text-[#666666] text-[14px] border-b border-gray-200'>FITNESS</Link>
      <Link className='flex gap-[4px] px-[15px] py-[10px] text-[#666666] text-[14px] border-b border-gray-200'>FURNITURE</Link>
      <Link className='flex gap-[4px] px-[15px] py-[10px] text-[#666666] text-[14px] border-b border-gray-200'>FASHION</Link>
      <Link className='flex gap-[4px] px-[15px] py-[10px] text-[#666666] text-[14px] border-b border-gray-200'>SHOPPING</Link>
      <Link className='flex gap-[4px] px-[15px] py-[10px] text-[#666666] text-[14px] border-b border-gray-200'>HOME & GARDEN</Link>
      <Link className='flex gap-[4px] px-[15px] py-[10px] text-[#666666] text-[14px] border-b border-gray-200'>TRAVEL</Link>
      <Link className='flex gap-[4px] px-[15px] py-[10px] text-[#666666] text-[14px] border-b border-gray-200'>ALL CATEGORIES</Link>
    </div>
  )
}

export default SideBar
