import React from 'react'
import Img1 from "../assets/img/2new.png"
import Img2 from "../assets/img/1new.png"

const About = () => {
    return (
        <div className='p-34 '>

            <div className=' flex w-full gap-8 justify-between relative pb-14'>

                <div className="leftAbout  flex gap-5 w-[50%]">

                    <div className=' w-60 h-[16rem]'>
                        <img src={Img1} className='' alt="First Photo" />
                    </div>

                    <div className='w-64 h-[508px] overflow-hidden'>
                        <img src={Img2} className='h-full transition ' alt="Second Photo" />
                    </div>


                </div>


                <div className='absolute left-[65px] bottom-[55px] w-[240px] h-[210px] flex justify-center items-center flex-col text-white  bg-red-700'>
                    <span className='text-5xl font-bold'>12+</span>
                    Years Experience
                </div>


                <div className="rightAbout  w-[50%]  relative">

                    <div className='text-red-700 flex gap-5 items-center'>
                        <i className="fa-solid fa-equals text-4xl font-light"></i>
                        <p className='text-xl font-medium'>
                            FUSION TECH MULTI-SERVICES
                        </p>
                    </div>

                    <h1 className='text-5xl font-bold pt-5 pb-8'>
                        About Us
                    </h1>

                    <p className='text-gray-600 '>
                        Fusion Tech Multi-services is one of the leading Placement Firms, placing candidates in leading companies. The chief objective being promoting employment of Indian manpower in India & foreign countries.
                    </p>

                    <button className='bg-red-700 text-white px-12 py-4 rounded-lg mt-10 cursor-pointer btn'>
                        MORE  <i className="fa-solid fa-angles-right"></i>
                        {/* <div className='befo'>
                            MORE  <i className="fa-solid fa-angles-right"></i>
                        </div> */}
                    </button>


                    <div className='flex  justify-between pt-12'>

                        <div className='flex gap-3 flex-col'>

                            <p className='flex gap-3 items-center'>  <span className='text-red-700 text-2xl'><i className="fa-regular fa-circle-check"></i></span> Headhunting and Bulk hiring</p>
                            <p className='flex gap-3 items-center'>  <span className='text-red-700 text-2xl'><i className="fa-regular fa-circle-check"></i></span> Customized recruitment strategy</p>
                            <p className='flex gap-3 items-center'>  <span className='text-red-700 text-2xl'><i className="fa-regular fa-circle-check"></i></span> Job fairs</p>

                        </div>

                        <div className='w-[140px] h-[140px]  text-white bg-black flex flex-col justify-center items-center'>
                            <span className='text-4xl font-medium'>
                                50
                            </span>
                            <p className='text-center'> Expert Team members</p>
                        </div>

                    </div>

                </div>

            </div>





        </div>
    )
}

export default About