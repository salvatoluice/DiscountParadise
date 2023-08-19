import React, { useEffect, useState } from 'react';

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    imageUrl: 'https://images.unsplash.com/photo-1682686581362-796145f0e123?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
    reviews: '5 stars'
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description for Product 2',
    imageUrl: 'https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
    reviews: '4.5 stars'
  },
  // Add more product data
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
    };
  
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
    };
  
    useEffect(() => {
      const interval = setInterval(handleNextClick, 4000);
      return () => clearInterval(interval);
    }, []);
  
    const currentProduct = products[currentIndex];
  
    return (
      <div className="relative h-[400px]">
        {/* <button className=" left-0" onClick={handlePrevClick}>Previous</button> */}
        <div className=" relative w-full h-full bg-cover bg-center mx-auto" style={{ backgroundImage: `url(${currentProduct.imageUrl})` }}>
          <div className="absolute inset-0 flex flex-col p-4 text-white bg-black bg-opacity-50">
            <h2 className="product-title text-xl mb-2">{currentProduct.title}</h2>
            <p className="product-description text-sm mb-2">{currentProduct.description}</p>
            <p className="product-reviews text-xs">Reviews: {currentProduct.reviews}</p>
          </div>
        </div>
        {/* <button className="slider-button right-0" onClick={handleNextClick}>Next</button> */}
      </div>
    );
  };
  
  export default ImageSlider;
