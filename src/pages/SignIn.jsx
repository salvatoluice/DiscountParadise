import React from 'react'
import TopBar from '../elements/TopBar'
import Header from '../elements/Header'
import HeaderMenu from '../elements/HeaderMenu'

const SignIn = () => {
  return (
    <div className='w-full h-[100vh] bg-[#E9EBEE]'>
      <header className='top-bar bg-gray'>
        <TopBar />
        <Header />
        <HeaderMenu />
      </header>
      <div className='mx-[100px] mt-[60px] flex flex-col gap-[20px] p-[20px] bg-white rounded-md'>
        <p className='flex items-center border-b border-gray-200 pb-4'>
            Sign In <span>Or</span> <span>Sign Up</span>
        </p>
        <form action="" className='flex flex-col gap-[10px] w-1/2'>
            <input 
                type="text" 
                name="" 
                id="" 
                placeholder='Email'
                className='w-full border border-gray-300 rounded-md outline-none text-[14px] text-[#666666] py-[8px] px-[10px]'
            />
            <input 
                type="password" 
                name="" 
                id="" 
                placeholder='Password'
                className='w-full border border-gray-300 rounded-md outline-none text-[14px] text-[#666666] py-[8px] px-[10px]'
            />
            <p className='text-green-500 cursor-pointer text-[12px] '>Forgot Password?</p>
            <button className='text-center text-[14px] text-white bg-green-500 rounded-md py-[10px] w-full'>SIGN IN</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
