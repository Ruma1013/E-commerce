import React from 'react'
import Slider from "react-slick";

const testimonialData =[
    {
        id: 1,
        name: "Chamudi Rumanda",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Kawindi Sena",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 3,
        name: "Danial Dom",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 4,
        name: "Ruma Sena",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://picsum.photos/101/101",
    },

]

const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,

        SlideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    SlideToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    SlideToScroll: 1,
                    initialSlide: 2,
                },

            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    SlideToScroll: 1,
                },
            }
        ]
    }


  return (
    <div className='py-10 text-center mb-10'>
    <div className='container max-w-[1200px] mx-auto'>
        {/* header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos="fade-up" className='text-sm text-primary'>What our customers are saying</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonials</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>
                Top Selling Products for youTop Selling Products for youTop Selling Products for youTop Selling Products for you
            </p>
        </div>

        {/* Testimonial cards */}
        <div
        data-aos="zoom-in"
        >
            <Slider {...settings}>
                {
                    testimonialData.map((data) => (
                        <div className='my-6'>
                             <div
                        key={data.id}
                        className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
                            <div className='mb-4'>
                                <img src={data.img} alt="" 
                                className='rounded-full w-20 h-20'/>
                            </div>
                            <div 
                            className='flex flex-col items-center gap-4'
                            >
                                <div className='space-y-3'>
                                <p
                                className='text-xs text-gray-400'
                                >{data.text} </p>
                                <h1
                                className='text-xl font-bold text-black/80 dark:text-light'>{data.name}</h1>

                                </div>
                                
                            </div>
                            <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'> ,,
                            </p>
                        </div>

                        </div>
                       
                    ))
                }
            </Slider>
        </div>

    </div>
</div>

  )
}

export default Testimonials
