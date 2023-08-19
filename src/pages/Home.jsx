import React from 'react'
import TopBar from '../elements/TopBar'
import Header from '../elements/Header'
import HeaderMenu from '../elements/HeaderMenu'
import SideBar from '../elements/SideBar'
import ImageSlider from '../elements/ImageSlider'
import Stats from '../elements/Stats'
import ProductCard from '../elements/ProcuctCard'
import ActiveDiscount from '../elements/ActiveDiscount'

const Home = () => {
  const products = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      rating: 4.5,
      title: 'Product Title 1',
      location: 'Location 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur optio aliquam, aperiam ab asperiores ex',
      price: 99.99,
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      rating: 4.5,
      title: 'Product Title 1',
      location: 'Location 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur optio aliquam, aperiam ab asperiores ex',
      price: 99.99,
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      rating: 4.5,
      title: 'Product Title 1',
      location: 'Location 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur optio aliquam, aperiam ab asperiores ex',
      price: 99.99,
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      rating: 4.5,
      title: 'Product Title 1',
      location: 'Location 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur optio aliquam, aperiam ab asperiores ex',
      price: 99.99,
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      rating: 4.5,
      title: 'Product Title 1',
      location: 'Location 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur optio aliquam, aperiam ab asperiores ex',
      price: 99.99,
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      rating: 4.5,
      title: 'Product Title 1',
      location: 'Location 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur optio aliquam, aperiam ab asperiores ex',
      price: 99.99,
    },
  ];
  return (
    <div className='page-wrapper'>
      <header className='top-bar bg-gray'>
        <TopBar />
        <Header />
        <HeaderMenu />
      </header>
      <div className='h-full py-[20px] w-full gap-[20px] flex bg-[#E9EBEE] px-[100px]'>
        <SideBar />
        <div className='bg-white h-full w-full'>
            <ImageSlider />
        </div>
      </div>
      <div className='bg-[#E9EBEE] py-[30px] px-[100px]'>
        <Stats />
        <div className='bg-white flex w-full justify-between bg-white items-center my-[20px] px-[10px] py-[10px]'>
          <p className='text-[15px] font-medium '>Expired Deals</p>
          <button className='border-[2px] p-[4px] border-green-500 text-green-500 rounded'>VIEW ALL</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <div className='bg-white flex w-full justify-between items-center bg-white my-[20px] px-[10px] py-[10px]'>
          <p className='text-[15px] font-medium '>Latest Deals</p>
          <button className='border-[2px] p-[4px] border-green-500 text-green-500 rounded'>VIEW ALL</button>
        </div>
        <div>
          <ActiveDiscount />
        </div>
        <div className='bg-white flex w-full justify-between items-center bg-white my-[20px] px-[10px] py-[10px]'>
          <p className='text-[15px] font-medium '>Popular Stores</p>
          <button className='border-[2px] p-[4px] border-green-500 text-green-500 rounded'>SEE ALL STORES</button>
        </div>
      </div>
    </div>
  )
}

export default Home
