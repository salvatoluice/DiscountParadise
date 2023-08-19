import React from 'react';
import { BsBasket, BsCameraFill, BsFillSuitHeartFill, BsShareFill } from 'react-icons/bs';
import { BiCurrentLocation } from 'react-icons/bi';

const ProductCard = ({ product }) => {
  const { imageUrl, rating, title, location, description, price } = product;

  return (
    <div className="border rounded-lg overflow-hidden shadow-md bg-white">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
        <div className="absolute inset-0 flex justify-between items-start p-2">
          <span className="bg-red-500 text-white p-[5px] h-[45px] flex items-center justify-center w-[45px] rounded-full">-30%</span>
          <div className="flex gap-2">
            <button className="text-white bg-gray-700 px-2 py-1 rounded-full">
              <BsFillSuitHeartFill />
            </button>
            <button className="text-white bg-gray-700 px-2 py-1 rounded-full">
              <BsShareFill />
            </button>
            <button className="text-white bg-gray-700 px-2 py-1 rounded-full">
              <BsCameraFill />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="bg-yellow-400 w-fit text-white px-2 py-1 rounded-full">{rating}</p>
        <span className="text-gray-600 text-[20px] font-medium">{title}</span>
        <div className='flex items-center gap-[10px]'>
            <p className="text-gray-400 text-[13px] flex items-center gap-[4px] "> <BiCurrentLocation />{location}</p>
            <p className="text-gray-400 text-[13px] flex items-center gap-[4px] "> <BsBasket />75 Bought</p>
        </div>
        <p className="text-[#666666] text-[13px] ">{description}</p>
        <p className="text-gray-800 font-semibold mt-2">KES. {price}</p>
        <p>This offer has expired</p>
      </div>
    </div>
  );
};

export default ProductCard;
