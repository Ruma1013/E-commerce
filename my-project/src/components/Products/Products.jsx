import React from 'react'
import Img1 from '../../assets/product_11.png'
import Img2 from '../../assets/product_12.png'
import Img3 from '../../assets/product_13.png'
import Img4 from '../../assets/product_14.png'
import Img5 from '../../assets/product_20.png'
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";



const ProductsData = [
    {
       id:1,
       img: Img1,
       title: "Women Ethinic",
       rating: 5.0,
       author: "white",
       aosDelay: "0", 
    },
    {
        id:2,
        img: Img2,
        title: "Women Ethinic",
        rating: 5.0,
        author: "white",
        aosDelay: "200", 
     },
     {
        id:3,
        img: Img3,
        title: "Women Ethinic",
        rating: 5.0,
        author: "white",
        aosDelay: "400", 
     },
     {
        id:4,
        img: Img4,
        title: "Women Ethinic",
        rating: 5.0,
        author: "white",
        aosDelay: "600", 
     },
     {
        id:5,
        img: Img5,
        title: "Women Ethinic",
        rating: 5.0,
        author: "white",
        aosDelay: "800", 
     },
]

const Products = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'> {/* Added flex container for centering */}
      <div className='mt-14 mb-12 w-full max-w-[1200px]'> {/* Restrict max width and center */}
        <div className='container mx-auto'>
          {/* Header Section */}
          <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products for you</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Top Selling Products for youTop Selling Products for youTop Selling Products for youTop Selling Products for you</p>
          </div>

          {/* Body Section */}
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
              {/* Product Card */}
              {ProductsData.map((data) => (
                <div 
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className='space-y-3'>
                  <img src={data.img} alt=""
                    className='h-[300px] w-[200px] object-cover rounded-md' />
                  <div>
                    <h3 className='font-semibold'>{data.title}</h3>
                    <p className='text-sm text-gray-600'>{data.author}</p>
                    <div className='flex items-center gap-1'>
                      <FaStar className='text-yellow-400 justify-center' />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* View all button */}
            <div className='flex justify-center'>
              <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md '>
                View All
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
