import React from 'react'
import Banner from "../../assets/Newsletter.jpg";

const BannerImg = {
    backgroundImage: `url(${Banner})`,  // Corrected the typo
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className=' mb-20 bg-gray-100 dark:bg-gray-800 text-white h-[400px]'  // Set a height for the container
      style={BannerImg}
    >
      <div className='container backdrop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
          <h1 className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>
            Get Notified About New Products</h1>
            <input type="text"
            data-aos="fade-up"
            placeholder='Enter Your Email'
            className='w-full p-3' />
          <p className='text-sm mt-2 text-center'>Subscribe to our newsletter and stay updated.</p>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
