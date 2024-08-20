import React from 'react';
import BannerImg from '../../assets/Banner.jpg';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
          {/* Image section */}
          <div data-aos='zoom-in'>
            <img
              src={BannerImg}
              className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.4)] object-cover'
              alt=''
            />
          </div>

          {/* Text details section */}
          <div>
            <h1
              data-aos='fade-up'
              className='text-3xl sm:text-4xl font-bold mb-4'
            >
              Winter Sale upto 50% Off
            </h1>
            <p
              data-aos='fade-up'
              className='text-sm text-gray-500 tracking-wide leading-5 mb-6'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Feature list */}
            <div className='space-y-4'>
              <div
                className='flex items-center gap-4'
                data-aos='fade-up'
              >
                <GrSecure className='text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-violet-100 dark:bg-violet-400' />
                <p className='text-lg'>Quality Products</p>
              </div>
              <div
                className='flex items-center gap-4'
                data-aos='fade-up'
              >
                <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 dark:bg-orange-400' />
                <p className='text-lg'>Fast Delivery</p>
              </div>
              <div
                className='flex items-center gap-4'
                data-aos='fade-up'
              >
                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-green-100 dark:bg-green-400' />
                <p className='text-lg'>Easy Payment Method</p>
              </div>
              <div
                className='flex items-center gap-4'
                data-aos='fade-up'
              >
                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100 dark:bg-yellow-400' />
                <p className='text-lg'>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
