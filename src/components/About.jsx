import React from 'react'
import Img1 from "../assets/img/2new.png"
import Img2 from "../assets/img/1new.png"

const About = () => {
    return (
        <div className='px-4 sm:px-8 md:px-16 lg:px-24 xl:px-34 py-8'>
            <div className='flex flex-col lg:flex-row w-full gap-6 sm:gap-8 justify-between relative pb-8 sm:pb-14'>
                <div className="leftAbout flex flex-col sm:flex-row gap-4 sm:gap-5 w-full lg:w-[50%]">
                    <div className='w-full sm:w-60 h-64 sm:h-[16rem]'>
                        <img src={Img1} className='w-full h-full object-cover' alt="First Photo" />
                    </div>
                    <div className='w-full sm:w-64 h-96 sm:h-[508px] overflow-hidden'>
                        <img src={Img2} className='w-full h-full object-cover transition' alt="Second Photo" />
                    </div>
                </div>

                <div className='absolute left-4 sm:left-8 md:left-[65px] bottom-6 sm:bottom-[55px] w-full sm:w-[240px] h-auto sm:h-[210px] flex justify-center items-center flex-col text-white bg-red-700 p-4'>
                    <span className='text-3xl sm:text-5xl font-bold'>12+</span>
                    <span className='text-center text-sm sm:text-base'>Years Experience</span>
                </div>

                <div className="rightAbout w-full lg:w-[50%] relative">
                    <div className='text-red-700 flex gap-3 sm:gap-5 items-center'>
                        <i className="fa-solid fa-equals text-2xl sm:text-4xl font-light"></i>
                        <p className='text-base sm:text-xl font-medium'>
                            FUSION TECH MULTI-SERVICES
                        </p>
                    </div>

                    <h1 className='text-3xl sm:text-5xl font-bold pt-4 sm:pt-5 pb-6 sm:pb-8'>
                        About Us
                    </h1>

                    <p className='text-gray-600 text-sm sm:text-base'>
                        Fusion Tech Multi-services is one of the leading Placement Firms, placing candidates in leading companies. The chief objective being promoting employment of Indian manpower in India & foreign countries.
                    </p>

                    <button className='bg-red-700 text-white px-6 sm:px-12 py-2 sm:py-4 rounded-lg mt-6 sm:mt-10 cursor-pointer btn text-sm sm:text-base'>
                        MORE <i className="fa-solid fa-angles-right"></i>
                    </button>

                    <div className='flex flex-col sm:flex-row justify-between pt-8 sm:pt-12 gap-4 sm:gap-6'>
                        <div className='flex gap-3 flex-col'>
                            <p className='flex gap-3 items-center text-sm sm:text-base'>
                                <span className='text-red-700 text-lg sm:text-2xl'><i className="fa-regular fa-circle-check"></i></span> Headhunting and Bulk hiring
                            </p>
                            <p className='flex gap-3 items-center text-sm sm:text-base'>
                                <span className='text-red-700 text-lg sm:text-2xl'><i className="fa-regular fa-circle-check"></i></span> Customized recruitment strategy
                            </p>
                            <p className='flex gap-3 items-center text-sm sm:text-base'>
                                <span className='text-red-700 text-lg sm:text-2xl'><i className="fa-regular fa-circle-check"></i></span> Job fairs
                            </p>
                        </div>

                        <div className='w-full sm:w-[140px] h-auto sm:h-[140px] text-white bg-black flex flex-col justify-center items-center p-4'>
                            <span className='text-2xl sm:text-4xl font-medium'>
                                50
                            </span>
                            <p className='text-center text-sm sm:text-base'>Expert Team members</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About